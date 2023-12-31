import {
  TransitionLength,
  TransitionProvider,
} from "@/contexts/TransitionContext";
import type { Metadata } from "next";
import "./globals.scss";
import { mono } from "@/utils/fonts";
import { TerminalProvider } from "@/contexts/TerminalContext";

export const metadata: Metadata = {
  title: "Jamil Ettel - Portfolio",
  description:
    "Hello! I'm a fullstack developer, and this is my portfolio website!",
  themeColor: "#191919",
  icons: [
    { rel: "apple-touch-icon", sizes: "57x57", url: "/apple-icon-57x57.png" },
    { rel: "apple-touch-icon", sizes: "60x60", url: "/apple-icon-60x60.png" },
    { rel: "apple-touch-icon", sizes: "72x72", url: "/apple-icon-72x72.png" },
    { rel: "apple-touch-icon", sizes: "76x76", url: "/apple-icon-76x76.png" },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      url: "/apple-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      url: "/apple-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      url: "/apple-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      url: "/apple-icon-152x152.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-icon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/android-icon-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
};

const TRANSITIONS: TransitionLength[] = [
  {
    from: ["/"],
    to: ["/work", "/about", "/contact"],
    duration: 2500,
  },
  {
    from: ["/work", "/about", "/contact"],
    to: ["/"],
    duration: 2800,
  },
  {
    from: ["/work", "/about", "/contact"],
    to: ["/work", "/about", "/contact"],
    duration: 1000,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <TransitionProvider transitionLengths={TRANSITIONS}>
          <TerminalProvider terminalClassName="terminal">
            {children}
          </TerminalProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
