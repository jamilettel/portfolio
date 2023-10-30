"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

interface TransitionContextProps {
  updateContent: (elementId: string, transitionLength?: number) => void;
  savedId?: string;
  savedChildren: HTMLElement | null;
  clearContent: () => void;
  animateOutUnknown: boolean;
  animateInUnknown: boolean;
}

const TransitionContext = createContext<TransitionContextProps>({
  updateContent() {},
  savedChildren: null,
  animateOutUnknown: false,
  animateInUnknown: false,
  clearContent() {},
});

function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [savedChildren, setSavedChildren] = useState<HTMLElement | null>(null);
  const [savedId, saveId] = useState<string>();
  const [animateOutUnknown, setAnimateOutUnknown] = useState(false);
  const [animateInUnknown, setAnimateInUnknown] = useState(
    savedId === undefined
  );
  const [transitionLength, setTransitionLength] = useState(0);
  const router = useRouter();

  function updateContent(elementId: string, transitionLength: number = 1000) {
    setSavedChildren(document.getElementById(elementId));
    saveId(elementId);
    setTransitionLength(transitionLength);
  }

  function clearContent() {
    setSavedChildren(null);
    saveId(undefined);
  }

  useEffect(() => {
    window.onpopstate = () => {
      if (history.state.redirect !== false) {
        setAnimateOutUnknown(true);
        setTimeout(() => {
          history.back();
        }, 1000);
      }
    };
  }, []);

  useEffect(() => {
    history.pushState(
      {
        redirect: false,
      },
      "",
      pathname
    );
    if (transitionLength) {
      setTimeout(clearContent, transitionLength);
    }
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setAnimateInUnknown(false);
    }, 1000);
  }, [animateInUnknown]);

  return (
    <TransitionContext.Provider
      value={{
        updateContent,
        savedChildren,
        savedId,
        animateOutUnknown,
        animateInUnknown,
        clearContent,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransitionContext() {
  return React.useContext(TransitionContext);
}

export { TransitionProvider };
