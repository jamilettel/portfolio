"use client";
import { getIdFromPathname } from "@/utils/animated-utils";
import { usePathname } from "next/navigation";
import React, { createContext, useEffect, useMemo, useState } from "react";

type ScrollPosition = {
  top: number;
  left: number;
};

interface TransitionContextProps {
  transition: (newPage: string) => void;
  savedId?: string;
  savedElements: HTMLElement | null;
  clearContent: () => void;
  animateOutUnknown: boolean;
  animateInUnknown: boolean;
  scrollPosition?: ScrollPosition;
  transitionLength: number;
}

const TransitionContext = createContext<TransitionContextProps>({
  transition() {},
  savedElements: null,
  animateOutUnknown: false,
  animateInUnknown: false,
  clearContent() {},
  transitionLength: 0,
});

export type TransitionLength = {
  from: string[];
  to: string[];
  duration: number;
};

function TransitionProvider({
  children,
  transitionLengths,
  defaultTransitionLength = 1000,
}: {
  children: React.ReactNode;
  transitionLengths?: TransitionLength[];
  defaultTransitionLength?: number;
}) {
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

  function transition(newPage: string) {
    const elementId = getIdFromPathname(pathname);
    const elem = document.getElementById(elementId);
    setSavedElements(elem);
    saveId(elementId);
    setScrollPosition({
      left: window.scrollX,
      top: window.scrollY,
    });
    let transitionLength = defaultTransitionLength;
    if (transitionLengths) {
      let override = transitionLengths.find(
        (tl) => tl.from.includes(pathname) && tl.to.includes(newPage)
      );
      if (override) {
        transitionLength = override.duration;
      }
    }
    setTransitionLength(transitionLength);
  }

  function clearContent() {
    setSavedElements(null);
    saveId(undefined);
    setScrollPosition(undefined);
    setTransitionLength(0);
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
        transition,
        savedElements,
        savedId,
        animateOutUnknown,
        animateInUnknown,
        scrollPosition,
        clearContent,
        transitionLength,
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
