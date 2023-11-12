"use client";

import TerminalInputManager from "@/components/terminal/TerminalInputManager";
import { useState } from "react";
import "./Terminal.scss";
import TerminalInput from "@/components/terminal/TerminalInput";
import { getIdFromPathname } from "@/utils/animated-utils";
import { usePathname } from "next/navigation";

type TerminalLog = {
  command: string | null;
  commandOrigin: string | null;
  output: string;
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState<TerminalLog[]>([]);
  const pathname = usePathname();
  const page = getIdFromPathname(pathname);

  return (
    <TerminalInputManager
      input={input}
      onSubmit={(input) => {
        setLog((log) => [
          ...log,
          { command: input, commandOrigin: page, output: "" },
        ]);
        setInput("");
      }}
      onCancel={(input) => {
        setLog((log) => [
          ...log,
          { command: input + "^C", commandOrigin: page, output: "" },
        ]);
        setInput("");
      }}
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
