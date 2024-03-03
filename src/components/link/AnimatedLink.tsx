"use client";
import { useTransitionContext } from "@/contexts/TransitionContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AnimatedLink({
  href,
  children,
  className,
}: {
  href: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const { transition, savedId } = useTransitionContext();

  return (
    <Link
      onClick={(e) => {
        if (savedId) return e.preventDefault();
        transition(href);
      }}
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
}
