"use client";

import { useTransitionContext } from "@/contexts/TransitionContext";
import { getIdFromPathname } from "@/utils/animated-utils";
import { usePathname } from "next/navigation";
import "./AnimatedContainer.scss";

export default function AnimatedContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { savedChildren, savedId, animateOutUnknown } = useTransitionContext();
  const pathname = usePathname();

  let finalClassname = className;
  if (animateOutUnknown) {
    finalClassname += ' animate-out animate-out-unknown';
  }

  return (
    <>
      <main id={getIdFromPathname(pathname)} className={className}>
        {children}
      </main>
      {savedChildren && (
        <main
          dangerouslySetInnerHTML={{ __html: savedChildren.innerHTML }}
          id={savedId}
          className={`${savedChildren.className ?? ""} animate-out`}
        />
      )}
    </>
  );
}
