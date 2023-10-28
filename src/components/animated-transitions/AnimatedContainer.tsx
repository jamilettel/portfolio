"use client";

import { useTransitionContext } from "@/contexts/TransitionContext";
import { getIdFromPathname } from "@/utils/animated-utils";
import { usePathname } from "next/navigation";
import "./AnimatedContainer.scss";
import { useMemo } from "react";

export default function AnimatedContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { savedChildren, savedId, animateOutUnknown } = useTransitionContext();
  const pathname = usePathname();
  const currentId = useMemo(() => getIdFromPathname(pathname), []);

  let finalClassname = className;
  if (animateOutUnknown) {
    finalClassname += ' animate-out animate-out-unknown';
  } else if (savedId && savedId !== currentId) {
    finalClassname += ` animate-in animate-in-${savedId}`;
  }

  return (
    <>
      <main id={currentId} className={finalClassname}>
        {children}
      </main>
      {savedChildren && (
        <main
          dangerouslySetInnerHTML={{ __html: savedChildren.innerHTML }}
          id={savedId}
          className={`${savedChildren.className ?? ""} animate-out animate-out-${currentId}`}
        />
      )}
    </>
  );
}
