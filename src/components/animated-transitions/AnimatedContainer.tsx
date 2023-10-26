"use client";

import { useTransitionContext } from "@/contexts/TransitionContext";
import { usePathname } from "next/navigation";
import "./AnimatedContainer.scss";

export default function AnimatedContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { savedChildren, savedId: savedPathname } = useTransitionContext();
  const pathname = usePathname();

  return (
    <>
      <main id={pathname} className={className}>
        {children}
      </main>
      {savedChildren && (
        <main
          dangerouslySetInnerHTML={{ __html: savedChildren.innerHTML }}
          id={savedPathname}
          className={`${savedChildren.className ?? ""} animate-out`}
        />
      )}
    </>
  );
}
