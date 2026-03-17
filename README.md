# @bravotango/react-image-cycle

A lightweight React component for cycling through a sequence of images to create simple frame-by-frame animations.

Perfect for:

- Sprite animations (games, characters, UI effects)
- GIF-like behavior using individual image files
- Lightweight animations without canvas or video

---

## Install

```bash
npm install @bravotango/react-image-cycle
```

## Usage

### Basic Example

```jsx
import { ImageCycle } from "@bravotango/react-image-cycle";

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
];

export default function App() {
  return <ImageCycle images={images} interval={300} width={150} height={150} />;
}
```

### Next.js Example

This component uses `useEffect`, so it must run on the client:

```jsx
"use client";

import { ImageCycle } from "@bravotango/react-image-cycle";

export default function Frog() {
  const images = [
    "/frog/1.png",
    "/frog/2.png",
    "/frog/3.png",
    "/frog/4.png",
    "/frog/5.png",
  ];

  return <ImageCycle images={images} interval={300} width={50} height={39} />;
}
```

---

## Props

| Prop       | Type       | Default | Description                         |
| ---------- | ---------- | ------- | ----------------------------------- |
| `images`   | `string[]` | —       | Array of image URLs (required)      |
| `interval` | `number`   | `300`   | Time in milliseconds between frames |
| `width`    | `number`   | `150`   | Width of the image                  |
| `height`   | `number`   | `150`   | Height of the image                 |

---

## How It Works

- Cycles through an array of image URLs using `setInterval`
- Loops automatically back to the first image
- Renders a single `<img>` element and swaps the `src`

---

## Notes

- If `images` is empty or undefined, nothing is rendered
- Ensure all images are the same dimensions for smooth animation
- This component does not preload images (consider preloading for large sequences)

---

## Combining with CSS Animations

You can combine this with CSS for movement:

```css
@keyframes move {
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(-100%);
  }
}

.sprite {
  position: absolute;
  animation: move 6s linear infinite;
}
```

---

## Development

This package is built using TypeScript and Vite, but no Vite setup is required to use it.

---

## License

MIT
