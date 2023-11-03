import { TransitionProvider } from "@/contexts/TransitionContext";
import type { Metadata } from "next";
import "./globals.scss";
import { mono } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Jamil Ettel",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
