"use client";

import TerminalInput from "@/components/terminal/TerminalInput";
import { useState } from "react";
import "./Terminal.scss";
import { usePathname } from "next/navigation";
import { getIdFromPathname } from "@/utils/animated-utils";

function moveCaretWithCtrl(
  input: string,
  index: number,
  direction: 1 | -1
): number {
  let amount = direction;
  let toSkip = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  while (
    amount + index > 0 &&
    amount + index < input.length &&
    !toSkip.includes(input[amount + index])
  ) {
    amount += direction;
  }
  while (
    amount + index > 0 &&
    amount + index < input.length &&
    toSkip.includes(input[amount + index + direction])
  ) {
    amount += direction;
  }
  return Math.abs(amount);
}
export default function TerminalInputManager({
  input,
  setInput,
  onSubmit,
  children,
  onCancel,
  onClear,
}: {
  input: string;
  setInput: (input: string) => void;
  onSubmit: (input: string) => void;
  onCancel: (input: string) => void;
  onClear: () => void;
  children?: React.ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  const [inputIndex, setInputIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const pathname = usePathname();
  const page = getIdFromPathname(pathname);

  function addLetter(letter: string) {
    setInput(
      input.slice(0, input.length - inputIndex) +
        letter +
        input.slice(input.length - inputIndex)
    );
  }

  function manageTerminalInput(
    key: string,
    ctrl: boolean,
    shift: boolean
  ): boolean {
    let amount = 1;

    if ((key === "C" || key === "c") && ctrl) {
      onCancel(input);
    } else if (key === "l" && ctrl) {
      onClear();
      return true;
    } else if (key.length === 1) {
      addLetter(key);
    } else if (key === "ArrowLeft") {
      if (shift) {
        addLetter("D");
        return false;
      }
      if (ctrl) {
        amount = moveCaretWithCtrl(input, input.length - inputIndex, -1);
      }
      setInputIndex(Math.min(inputIndex + amount, input.length));
    } else if (key === "ArrowRight") {
      if (shift) {
        addLetter("C");
        return false;
      }
      if (ctrl) {
        amount = moveCaretWithCtrl(input, input.length - inputIndex, 1) + 1;
      }
      setInputIndex(Math.max(0, inputIndex - amount));
    } else if (key === "ArrowUp" && shift) {
      addLetter("A");
    } else if (key === "ArrowDown" && shift) {
      addLetter("B");
    } else if (key === "Backspace") {
      if (ctrl) {
        amount = moveCaretWithCtrl(input, input.length - inputIndex, -1);
      }
      setInput(
        input.slice(0, Math.max(0, input.length - inputIndex - amount)) +
          input.slice(input.length - inputIndex)
      );
      setInputIndex(Math.min(inputIndex, input.length));
    } else if (key === "Delete") {
      if (ctrl) {
        amount = moveCaretWithCtrl(input, input.length - inputIndex, 1) + 1;
      }
      setInput(
        input.slice(0, Math.max(0, input.length - inputIndex)) +
          input.slice(input.length - inputIndex + amount)
      );
      setInputIndex(Math.max(0, inputIndex - amount));
    } else if (key === "Enter") {
      onSubmit(input);
    }
    if (blink) {
      setBlink(false);
      setTimeout(() => {
        setBlink(true);
      }, 1500);
    }
    if (key === " ") return true;
    return false;
  }

  return (
    <div
      className="terminal"
      tabIndex={0}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onKeyDown={(e) => {
        if (manageTerminalInput(e.key, e.ctrlKey, e.shiftKey)) {
          e.preventDefault();
        }
      }}
    >
      <div className="terminal-content">
        {children}
        <TerminalInput
          focused={focused}
          blink={blink}
          input={input}
          inputIndex={inputIndex}
          className={page}
        />
      </div>
    </div>
  );
}
