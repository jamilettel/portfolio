"use client";
import { getIdFromPathname } from "@/utils/animated-utils";
import { usePathname } from "next/navigation";
import React, { createContext, useState } from "react";
import "./TerminalCommandStyles.scss";

const HELP_MESSAGE = (
  <div className="terminal-message">
    Welcome to my portfolio website!
    <br />
    <br />
    You can use this terminal for navigation. Here is a list of the commands
    available:
    <br />
    <br />
    {"  cd".padEnd(10)} <span># change directories</span>
    <br />
    {"  clear".padEnd(10)} <span># clear console</span>
    <br />
    {"  help".padEnd(10)} <span># print this message</span>
    <br />
    {"  ls".padEnd(10)} <span># list directories</span>
    <br />
    {"  pwd".padEnd(10)} <span># print working directory</span>
    <br />
    {"  whoami".padEnd(10)} <span># prints current user</span>
    <br />
    <br />
    You can add the <b>--help</b> flag to any command to get more details about
    that command.
    <br />
    <br />
  </div>
);

const LS_HELP = (
  <div className="terminal-message">
    Usage: ls [OPTION]... [FILE]
    <br />
    List information about the FILE (the current directory by default). Sort
    entries alphabetically.
    <br />
    <br />
    {"  -a".padEnd(16)} do not ignore entries starting with .
    <br />
    {"  --help, -h".padEnd(16)} print help message
  </div>
);

type DirectoryPaths = {
  [key: string]: DirectoryPaths;
};

const DIRECTORIES: DirectoryPaths = {
  work: {},
  contact: {},
  about: {},
};

function checkPathExists(path: string[]) {
  let currentPath = DIRECTORIES;
  while (path.length > 0) {
    let p = path.shift()!;
    if (!currentPath[p]) {
      return false;
    }
    currentPath = currentPath[p];
  }
  return true;
}

function getPathDirectories(path: string[]): string[] {
  let currentPath = DIRECTORIES;
  while (path.length > 0) {
    let p = path.shift()!;
    if (!currentPath[p]) {
      return [];
    }
    currentPath = currentPath[p];
  }
  return Object.keys(currentPath);
}

export type TerminalLog = {
  command: string | null;
  commandOrigin: string | null;
  output: React.ReactNode;
};

interface TerminalContextProps {
  log: TerminalLog[];
  runCommand: (command: string) => void;
  addLog: (log: TerminalLog) => void;
  clearLog: () => void;
}

const TerminalContext = createContext<TerminalContextProps>({
  addLog() {},
  runCommand() {},
  clearLog() {},
  log: [],
});

function TerminalProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [log, setLog] = useState<TerminalLog[]>([
    {
      command: null,
      commandOrigin: null,
      output: HELP_MESSAGE,
    },
  ]);

  const COMMANDS: {
    [key: string]: (cmd: string[], currentPathname: string) => React.ReactNode;
  } = {
    ls: (cmd: string[], currentPathname: string) => {
      let answers = [];
      if (cmd.includes("--help") || cmd.includes("-h")) {
        return LS_HELP;
      }
      if (cmd.includes("-a")) {
        answers.push(".");
        answers.push("..");
      }
      let cmdPath = cmd
        .filter((c) => !c.startsWith("-"))
        .filter((c) => c !== "ls");
      let lsPath: string[] = [];
      if (cmdPath.length > 1) {
        return `ls: error: too many arguments`;
      } else if (cmdPath.length === 1) {
        lsPath = cmdPath[0]
          .replaceAll("/", " ")
          .trim()
          .split(" ")
          .filter((p) => p.length > 0);
      }

      let currentPath = currentPathname
        .replaceAll("/", " ")
        .trim()
        .split(" ")
        .filter((p) => p.length > 0);

      while (lsPath.length > 0) {
        let path = lsPath.shift()!;
        if (path === "..") {
          currentPath.pop();
        } else if (path === ".") {
          continue;
        } else if (!checkPathExists([...currentPath, path])) {
          return `ls: cannot access '${cmdPath[0]}': No such file or directory`;
        } else {
          currentPath.push(path);
        }
      }
      answers.push(...getPathDirectories(currentPath).sort());

      return (
        <div className="terminal-message">
          {answers.reduce((acc, answer) => {
            return acc + answer + "\n";
          }, "")}
        </div>
      );
    },
    cd: (cmd: string[], currentPathname: string) => "",
    clear: () => {
      setLog([]);
      return null;
    },
    pwd: (cmd: string[], currentPathname: string) => currentPathname,
    help: () => HELP_MESSAGE,
    whoami: () => "guest",
  };

  return (
    <TerminalContext.Provider
      value={{
        log,
        runCommand(command) {
          const commandOrigin = getIdFromPathname(pathname);
          let cmd = command.trim().split(" ");

          if (Object.keys(COMMANDS).includes(cmd[0])) {
            let output = COMMANDS[cmd[0]](cmd, pathname);
            if (output) {
              setLog([
                ...log,
                {
                  command,
                  commandOrigin,
                  output: COMMANDS[cmd[0]](cmd, pathname),
                },
              ]);
            }
          } else {
            const newLog = {
              command,
              commandOrigin,
              output: `bash: ${command}: command not found`,
            };
            setLog([...log, newLog]);
          }
        },
        addLog(newLog) {
          setLog([...log, newLog]);
        },
        clearLog() {
          setLog([]);
        },
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminalContext() {
  return React.useContext(TerminalContext);
}

export { TerminalProvider };
