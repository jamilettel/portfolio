"use client";

import { useTransitionContext } from "@/contexts/TransitionContext";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AnimatedContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setChildren } = useTransitionContext();
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname, children);
    return () => setChildren(children, pathname);
  }, []);

  return <>{children}</>;
}
