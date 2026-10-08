import { useEffect, useState } from "react";

export interface ImageCycleProps {
  images: string[];
  interval?: number;
  width?: number;
  showFrameDots?: boolean;
  className?: string;
  fadeInOut?: boolean;
}

export const ImageCycle = ({
  images,
  interval = 1000,
  width = 150,
  showFrameDots = false,
  className,
  fadeInOut = false,
}: ImageCycleProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  useEffect(() => {
    console.log("ImageCycle MOUNTED");

    return () => {
      console.log("ImageCycle UNMOUNTED");
    };
  }, []);

  if (!images.length) return null;

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
      }}
    >
      <div style={{ position: "relative", width }}>
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={className}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              position: index === 0 ? "relative" : "absolute",
              top: index === 0 ? undefined : 0,
              left: index === 0 ? undefined : 0,
              opacity: index === currentIndex ? 1 : 0,
              visibility: index === currentIndex ? "visible" : "hidden",
              transition: fadeInOut
                ? `opacity ${interval / 4}ms ease-in-out`
                : "none",
            }}
          />
        ))}
      </div>

      {showFrameDots && (
        <div style={{ display: "flex", gap: 4 }}>
          {images.map((_, index) => (
            <span
              key={index}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background:
                  index === currentIndex ? "#fff" : "rgba(255,255,255,0.3)",
                transform: index === currentIndex ? "scale(1.4)" : "scale(1)",
                transition: "background 0.15s, transform 0.15s",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
