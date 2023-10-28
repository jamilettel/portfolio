import { TransitionProvider } from "@/contexts/TransitionContext";
import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import "./globals.scss";

const mono = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

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
