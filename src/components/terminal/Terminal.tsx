"use client";

import { getIdFromPathname } from "@/utils/animated-utils";
import { usePathname } from "next/navigation";
import { RefObject, useRef, useState } from "react";
import "./Terminal.scss";

function TerminalInput({
  onSubmit,
  input,
  focused,
  inputIndex,
}: {
  onSubmit: (input: string) => void,
  input: string;
  inputIndex: number;
  focused: boolean
}) {
  const pathname = usePathname();
  const page = getIdFromPathname(pathname);

  return (
    <div className={`user-input ${page} ${focused ? 'focused' : ''}`}>
      {input.split("").map((letter, index) => (
        <span
          className={input.length - inputIndex === index ? "highlighted" : undefined}
          key={index}
        >
          {letter}
        </span>

      ))}
      {inputIndex === 0 && (
        <span className="cursor-block">{" "}</span>
      )}
    </div>
  );
}

function moveCaretWithCtrl(input: string, index: number, direction: 1 | -1): number {
  let amount = direction;
  let toSkip = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  while (amount + index > 0 && amount + index < input.length && !toSkip.includes(input[amount + index])) {
    amount += direction;
  }
  while (amount + index > 0 && amount + index < input.length && toSkip.includes(input[amount + index + direction])) {
    amount += direction;
  }
  return Math.abs(amount);
}

export default function Terminal() {
  const [focused, setFocused] = useState(false);
  const [input, setInput] = useState("");
  const [inputIndex, setInputIndex] = useState(0);

  function manageTerminalInput(key: string, ctrl: boolean) {
    let amount = 1;

    if (key.length === 1) {
      setInput(
        input.slice(0, input.length - inputIndex) + key + input.slice(input.length - inputIndex)
      );
    } else if (key === "ArrowLeft") {
      let index = Math.max(1, inputIndex);
      if (ctrl) {
        amount = moveCaretWithCtrl(input, input.length - index, -1);
      }
      setInputIndex(Math.min(index + amount, input.length));
    } else if (key === "ArrowRight") {
      if (ctrl) {
        amount = moveCaretWithCtrl(input, input.length - inputIndex, 1) + 1;
      }
      setInputIndex(Math.max(0, inputIndex - amount));
    } else if (key === "Backspace") {
      let index = Math.max(1, inputIndex);
      if (ctrl) {
        amount = moveCaretWithCtrl(input, input.length - index, -1);
      }
      setInput(
        input.slice(0, Math.max(0, input.length - index - amount)) + input.slice(input.length - inputIndex)
      );
      setInputIndex(Math.min(inputIndex, input.length));
    } else if (key === "Delete") {
      if (ctrl) {
        amount = moveCaretWithCtrl(input, input.length - inputIndex, 1) + 1;
      }
      setInput(
        input.slice(0, Math.max(0, input.length - inputIndex)) + input.slice(input.length - inputIndex + amount)
      );
      setInputIndex(Math.max(0, inputIndex - amount));
    }
  }

  return (
    <div className="terminal"
      tabIndex={0}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onKeyDown={(e) => manageTerminalInput(e.key, e.ctrlKey)}
    >
      <div className="terminal-content">
        <TerminalInput
          focused={focused}
          onSubmit={(input) => console.log(input)}
          input={input}
          inputIndex={inputIndex}
        />
      </div>
    </div>
  );
}


// TODO: you need to split strings by hand for displaying them