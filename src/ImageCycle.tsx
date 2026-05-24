import { useEffect, useState } from "react";

export interface ImageCycleProps {
  images: string[];
  interval?: number;
  width?: number;
  height?: number;
  showFrameDots?: boolean;
  className?: string;
  fadeInOut?: boolean;
}

export const ImageCycle = ({
  images,
  interval = 1000,
  width = 150,
  height = 150,
  showFrameDots = false,
  className,
  fadeInOut = false,
}: ImageCycleProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  // Each fade-out + fade-in = fadeDuration * 2, cap at 30% of interval total
  const fadeDuration = fadeInOut
    ? interval / 4 // ? Math.min(transitionDuration ?? Infinity, interval * 0.15)
    : 0;

  useEffect(() => {
    const timer = setInterval(() => {
      if (fadeDuration > 0) {
        setOpacity(0); // start fade out
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          setOpacity(1); // start fade in with new src
        }, fadeDuration); // wait for fade-out to finish
      } else {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval, fadeDuration]);

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
        src={images[currentIndex]}
        width={width}
        height={height}
        alt={`frame ${currentIndex}`}
        className={className}
        style={{
          display: "block",
          opacity,
          transition:
            fadeDuration > 0
              ? `opacity ${fadeDuration}ms ease-in-out`
              : undefined,
        }}
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
                background:
                  i === currentIndex ? "#fff" : "rgba(255,255,255,0.3)",
                transition: "background 0.15s, transform 0.15s",
                transform: i === currentIndex ? "scale(1.4)" : "scale(1)",
                display: "block",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
