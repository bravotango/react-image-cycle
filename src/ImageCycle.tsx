"use client";

import React, { useEffect, useState } from "react";

export interface ImageCycleProps {
  images: string[];
  interval?: number;
  width?: number;
  height?: number;
}

export const ImageCycle = ({
  images,
  interval = 300,
  width = 150,
  height = 150,
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
    <img
      src={images[index]}
      width={width}
      height={height}
      alt={`frame ${index}`}
      style={{ display: "block" }}
    />
  );
};
