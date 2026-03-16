import { useState } from "react";
import { ImageCycle } from "../src";

const frogImages = [
  "/assets/frog/1.png",
  "/assets/frog/1.png",
  "/assets/frog/2.png",
  "/assets/frog/3.png",
  "/assets/frog/4.png",
  "/assets/frog/5.png",
];

const walkImages = [
  "/assets/walk/1.jpg",
  "/assets/walk/2.jpg",
  "/assets/walk/3.jpg",
  "/assets/walk/4.jpg",
  "/assets/walk/5.jpg",
  "/assets/walk/6.jpg",
  "/assets/walk/7.jpg",
  "/assets/walk/8.jpg",
];
type ImageSetType = "Frog" | "Walk";
export default function App() {
  const [selectedSet, setSelectedSet] = useState<ImageSetType>("Walk");

  const images = selectedSet === "Frog" ? frogImages : walkImages;

  return (
    <div>
      <h1>react-image-cycle demo</h1>

      <ImageCycle images={images} interval={300} width={150} height={150} />

      <div style={{ marginTop: 20 }}>
        <label htmlFor="image-select" style={{ marginRight: 8 }}>
          Choose image set:
        </label>
        <select
          id="image-select"
          value={selectedSet}
          onChange={(e) => setSelectedSet(e.target.value as ImageSetType)}
        >
          <option value="Walk">Walk</option>
          <option value="Frog">Frog</option>
        </select>
      </div>
    </div>
  );
}
