"use client";

import { useTransitionContext } from "@/contexts/TransitionContext";
import { useEffect, useRef, useState } from "react";

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
  const { savedId } = useTransitionContext();

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setHeight(img.naturalHeight);
      setWidth(img.naturalWidth);
    };
    img.src = src;
  }, []);

  useEffect(() => {
    if (savedId) return;
    setTimeout(() => {
      if (pixelSize > 1) setPixelSize(pixelSize - 1);
      else setEnabled(false);
    }, 50);
  }, [pixelSize, savedId]);

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
    >
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
      />
    </svg>
  );
}
