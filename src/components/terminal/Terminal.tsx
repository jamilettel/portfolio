"use client";

import { useRef, useState } from "react";
import "./Terminal.scss";
import { getIdFromPathname } from "@/utils/animated-utils";
import { usePathname } from "next/navigation";

export default function Terminal() {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");
  const pathname = usePathname();
  const page = getIdFromPathname(pathname);

  return (
    <div className="terminal"
      onBlur={() => setFocused(false)}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-content">
        <input ref={inputRef} type="text" className="hidden-input"
          onChange={(e) => setInput(e.currentTarget.value)}
          value={input}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <div className={`user-input ${page} ${focused ? 'focused' : ''}`}>
          {input}
        </div>
      </div>
    </div>
  );
}
