"use client";
import { usePathname } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

interface TransitionContextProps {
  setChildren: (children: React.ReactNode, pathname: string) => void;
}

const TransitionContext = createContext<TransitionContextProps>({
  setChildren(children) {},
});

function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [savedChildren, setSavedChildren] = useState<React.ReactNode>();
  const [savedPathname, savePathname] = useState(pathname);

  return (
    <TransitionContext.Provider
      value={{
        setChildren(children, pathname) {
          setSavedChildren(children);
          savePathname(pathname);
        },
      }}
    >
      {children}
      {pathname !== savedPathname && savedChildren}
    </TransitionContext.Provider>
  );
}

export function useTransitionContext() {
  return React.useContext(TransitionContext);
}

export { TransitionContext, TransitionProvider };
