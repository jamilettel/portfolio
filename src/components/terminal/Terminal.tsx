"use client";

import { getIdFromPathname } from "@/utils/animated-utils";
import { usePathname } from "next/navigation";
import { RefObject, useRef, useState } from "react";
import "./Terminal.scss";

function TerminalInput({
  input,
  focused,
  inputIndex,
  blink,
}: {
  input: string;
  inputIndex: number;
  focused: boolean;
  blink: boolean;
}) {
  const pathname = usePathname();
  const page = getIdFromPathname(pathname);

  return (
    <div
      className={`user-input ${page} ${focused ? "focused" : ""} ${
        blink ? "blink" : ""
      }`}
    >
      {input.split("").map((letter, index) => (
        <span
          className={
            input.length - inputIndex === index ? "highlighted" : undefined
          }
          key={index}
        >
          {letter}
        </span>
      ))}
      {inputIndex === 0 && <span className="cursor-block"> </span>}
    </div>
  );
}

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

export default function Terminal() {
  const [focused, setFocused] = useState(false);
  const [input, setInput] = useState("");
  const [inputIndex, setInputIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  function manageTerminalInput(
    key: string,
    ctrl: boolean,
    shift: boolean
  ): boolean {
    let amount = 1;

    if (key.length === 1) {
      setInput(
        input.slice(0, input.length - inputIndex) +
          key +
          input.slice(input.length - inputIndex)
      );
    } else if (key === "ArrowLeft") {
      if (ctrl) {
        amount = moveCaretWithCtrl(input, input.length - inputIndex, -1);
      }
      setInputIndex(Math.min(inputIndex + amount, input.length));
    } else if (key === "ArrowRight") {
      if (ctrl) {
        amount = moveCaretWithCtrl(input, input.length - inputIndex, 1) + 1;
      }
      setInputIndex(Math.max(0, inputIndex - amount));
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
        <TerminalInput
          focused={focused}
          blink={blink}
          input={input}
          inputIndex={inputIndex}
        />
      </div>
    </div>
  );
}

// TODO: you need to split strings by hand for displaying them
