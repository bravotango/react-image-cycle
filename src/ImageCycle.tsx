"use client";

import { useEffect, useState } from "react";

export interface ImageCycleProps {
  images: string[];
  interval?: number;
  width?: number;
  height?: number;
  showFrameDots?: boolean;
  className?: string;
}

export const ImageCycle = ({
  images,
  interval = 1000,
  width = 150,
  height = 150,
  showFrameDots = false,
  className,
}: ImageCycleProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
      }}
    >
      <img
        src={images[index]}
        width={width}
        height={height}
        alt={`frame ${index}`}
        style={{ display: "block" }}
        className={className}
      />
      {showFrameDots && (
        <div style={{ display: "flex", gap: 4 }}>
          {images.map((_, i) => (
            <span
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: i === index ? "#fff" : "rgba(255,255,255,0.3)",
                transition: "background 0.15s, transform 0.15s",
                transform: i === index ? "scale(1.4)" : "scale(1)",
                display: "block",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
