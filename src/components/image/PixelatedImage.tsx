"use client";

import { useTransitionContext } from "@/contexts/TransitionContext";
import { useEffect, useMemo, useRef, useState } from "react";

const PIXEL_DELAY = 200;

export default function PixelatedImage({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const [pixelSize, setPixelSize] = useState(20);
  const [height, setHeight] = useState(300);
  const [width, setWidth] = useState(500);
  const [enabled, setEnabled] = useState(true);
  const ref = useRef<SVGImageElement>(null);
  const { transitionLength } = useTransitionContext();
  const extraDelay = useMemo(() => {
    if (pixelSize < 20) return 0;
    return Math.max(0, transitionLength - (pixelSize / 5) * PIXEL_DELAY);
  }, [transitionLength, pixelSize]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setHeight(img.naturalHeight);
      setWidth(img.naturalWidth);
    };
    img.src = src;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (pixelSize > 3) setPixelSize(Math.max(3, pixelSize - 5));
      else setEnabled(false);
    }, extraDelay + PIXEL_DELAY);
  }, [pixelSize, transitionLength]);

  return (
    <svg className={className} width={width} height={height}>
      <filter id="pixelate" x="0" y="0">
        <feFlood x={4} y={4} height={1} width={1} />
        <feComposite width={pixelSize * 2} height={pixelSize * 2} />
        <feTile result="a" />
        <feComposite in="SourceGraphic" in2="a" operator="in" />
        <feMorphology operator="dilate" radius={pixelSize} />
      </filter>

      <image
        preserveAspectRatio="xMidYMid slice"
        filter={enabled ? "url(#pixelate)" : ""}
        href={src}
        ref={ref}
        width="100%"
        height="100%"
      />
    </svg>
  );
}
