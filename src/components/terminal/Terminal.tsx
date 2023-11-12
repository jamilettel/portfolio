"use client";

import TerminalInputManager from "@/components/terminal/TerminalInputManager";
import { useState } from "react";
import "./Terminal.scss";
import TerminalInput from "@/components/terminal/TerminalInput";

type TerminalLog = {
  command: string | null;
  commandOrigin: string | null;
  output: string;
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState<TerminalLog[]>([]);

  return (
    <TerminalInputManager
      input={input}
      onSubmit={(input) => console.log(input)}
      setInput={setInput}
    >
      {log.map((log, index) => (
        <div key={index}>
          {log.command && (
            <TerminalInput
              blink={false}
              focused={false}
              inputIndex={-1}
              input={log.command}
              className={log.commandOrigin ?? undefined}
            />
          )}
          {log.output}
        </div>
      ))}
    </TerminalInputManager>
  );
}
