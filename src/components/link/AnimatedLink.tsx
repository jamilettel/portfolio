"use client";
import { useTransitionContext } from "@/contexts/TransitionContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AnimatedLink({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  const pathname = usePathname();
  const { updateContent } = useTransitionContext();

  return (
    <Link
      onClick={() => {
        updateContent(pathname);
      }}
      href={href}
    >
      {children}
    </Link>
  );
}
