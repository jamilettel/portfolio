"use client";

import { useTransitionContext } from "@/contexts/TransitionContext";
import { getIdFromPathname } from "@/utils/animated-utils";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import "./AnimatedContainer.scss";

export default function AnimatedContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const {
    savedElements,
    savedId,
    animateOutUnknown,
    animateInUnknown,
    scrollPosition,
  } = useTransitionContext();
  const pathname = usePathname();
  const currentId = useMemo(() => getIdFromPathname(pathname), []);

  let finalClassname = className;
  if (animateOutUnknown) {
    finalClassname += " animate-out animate-out-unknown";
  } else if (animateInUnknown) {
    finalClassname += " animate-in animate-in-unknown";
  } else if (savedId && savedId !== currentId) {
    finalClassname += ` animate-in animate-in-${savedId}`;
  }

  return (
    <>
      <main id={currentId} className={finalClassname}>
        {children}
      </main>
      {savedElements && savedId !== currentId && (
        <div id="animated-transition">
          <main
            dangerouslySetInnerHTML={{ __html: savedElements.innerHTML }}
            id={savedId}
            className={`${savedElements.className ?? ""
              } animate-out animate-out-${currentId}`}
            style={{
              top: -(scrollPosition?.top ?? 0),
              left: -(scrollPosition?.left ?? 0),
            }}
          />
        </div>
      )}
    </>
  );
}
