"use client";
import { useTransitionContext } from "@/contexts/TransitionContext";
import { getIdFromPathname } from "@/utils/animated-utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AnimatedLink({
  href,
  children,
  transitionLength,
  className,
}: {
  href: string;
  children?: React.ReactNode;
  transitionLength?: number;
  className?: string;
}) {
  const pathname = usePathname();
  const { updateContent } = useTransitionContext();

  return (
    <Link
      onClick={() => {
        updateContent(getIdFromPathname(pathname), transitionLength);
      }}
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
}
