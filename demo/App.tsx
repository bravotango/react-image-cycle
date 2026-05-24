import { useState } from "react";
import { ImageCycle } from "../src";

const frogImages = [
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

      <ImageCycle
        images={images}
        interval={300}
        width={150}
        height={150}
        showFrameDots={true}
        className="bg-pink"
      />

      <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
        <legend style={{ marginBottom: 8 }}>Choose image set:</legend>
        {(["Walk", "Frog"] as ImageSetType[]).map((set) => (
          <label key={set} style={{ marginRight: 16, cursor: "pointer" }}>
            <input
              type="radio"
              name="image-set"
              value={set}
              checked={selectedSet === set}
              onChange={() => setSelectedSet(set)}
              style={{ marginRight: 4 }}
            />
            {set}
          </label>
        ))}
      </fieldset>
    </div>
  );
}
