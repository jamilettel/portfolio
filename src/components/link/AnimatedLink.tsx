"use client";
import { useTransitionContext } from "@/contexts/TransitionContext";
import { getIdFromPathname } from "@/utils/animated-utils";
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
        updateContent(getIdFromPathname(pathname));
      }}
      href={href}
    >
      {children}
    </Link>
  );
}
