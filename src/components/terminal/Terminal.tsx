"use client";

import TerminalInputManager from "@/components/terminal/TerminalInputManager";
import { useState } from "react";
import "./Terminal.scss";
import TerminalInput from "@/components/terminal/TerminalInput";
import { getIdFromPathname } from "@/utils/animated-utils";
import { usePathname } from "next/navigation";
import { useTerminalContext } from "@/contexts/TerminalContext";

export default function Terminal() {
  const [input, setInput] = useState("");
  const { log, addLog, clearLog, runCommand } = useTerminalContext();
  const pathname = usePathname();

  return (
    <TerminalInputManager
      input={input}
      onSubmit={(input) => {
        if (!input.length) {
          addLog({
            command: input,
            commandOrigin: getIdFromPathname(pathname),
            output: "",
          });
        } else {
          runCommand(input);
        }
        setInput("");
      }}
      onCancel={(input) => {
        addLog({
          command: input + "^C",
          commandOrigin: getIdFromPathname(pathname),
          output: "",
        });
        setInput("");
      }}
      onClear={() => clearLog()}
      setInput={setInput}
    >
      {log.map((log, index) => (
        <div key={index}>
          {log.command !== null && (
            <TerminalInput
              blink={false}
              focused={false}
              inputIndex={-1}
              input={log.command}
              className={log.commandOrigin ?? undefined}
            />
          )}
          <div>{log.output}</div>
        </div>
      ))}
    </TerminalInputManager>
  );
}
