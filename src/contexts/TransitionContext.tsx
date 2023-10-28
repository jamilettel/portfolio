"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

interface TransitionContextProps {
  updateContent: (elementId: string, transitionLength?: number) => void;
  savedId?: string;
  savedChildren: HTMLElement | null;
  clearContent: () => void;
  fadeOut: boolean;
}

const TransitionContext = createContext<TransitionContextProps>({
  updateContent() { },
  savedChildren: null,
  fadeOut: false,
  clearContent() { },
});

function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [savedChildren, setSavedChildren] = useState<HTMLElement | null>(null);
  const [savedId, saveId] = useState<string>();
  const [fadeOut, setFadeOut] = useState(false);
  const [transitionLength, setTransitionLength] = useState(0);
  const router = useRouter();

  function updateContent(elementId: string, transitionLength: number = 500) {
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
        setFadeOut(true);
        setTimeout(() => {
          router.back();
        }, 200);
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

  return (
    <TransitionContext.Provider
      value={{
        updateContent,
        savedChildren,
        savedId,
        fadeOut,
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
