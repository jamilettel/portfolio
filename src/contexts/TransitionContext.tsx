"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

type ScrollPosition = {
  top: number;
  left: number;
};

interface TransitionContextProps {
  updateContent: (elementId: string, transitionLength?: number) => void;
  savedId?: string;
  savedElements: HTMLElement | null;
  clearContent: () => void;
  animateOutUnknown: boolean;
  animateInUnknown: boolean;
  scrollPosition?: ScrollPosition;
}

const TransitionContext = createContext<TransitionContextProps>({
  updateContent() {},
  savedElements: null,
  animateOutUnknown: false,
  animateInUnknown: false,
  clearContent() {},
});

function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [savedElements, setSavedElements] = useState<HTMLElement | null>(null);
  const [savedId, saveId] = useState<string>();
  const [scrollPosition, setScrollPosition] = useState<{
    top: number;
    left: number;
  }>();
  const [animateOutUnknown, setAnimateOutUnknown] = useState(false);
  const [animateInUnknown, setAnimateInUnknown] = useState(
    savedId === undefined
  );
  const [transitionLength, setTransitionLength] = useState(0);

  function updateContent(elementId: string, transitionLength: number = 1000) {
    const elem = document.getElementById(elementId);
    setSavedElements(elem);
    saveId(elementId);
    setScrollPosition({
      left: window.scrollX,
      top: window.scrollY,
    });
    setTransitionLength(transitionLength);
  }

  function clearContent() {
    setSavedElements(null);
    saveId(undefined);
    setScrollPosition(undefined);
  }

  useEffect(() => {
    window.onpopstate = () => {
      if (history.state.redirect !== false) {
        setAnimateOutUnknown(true);
        setTimeout(() => {
          history.back();
        }, 300);
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
    }, 300);
  }, [animateInUnknown]);

  return (
    <TransitionContext.Provider
      value={{
        updateContent,
        savedElements,
        savedId,
        animateOutUnknown,
        animateInUnknown,
        scrollPosition,
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
