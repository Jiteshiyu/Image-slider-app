import { useState } from "react";
import ImageSlider from "./ImageSlider.jsx";
import Controls from "./Controls.jsx";

export default function Slider() {
  const [currIndex, setCurrIndex] = useState(0);

  const images = [
    "../bird.jpg",
    "../mountain.jpg",
    "../animals.jpg",
    "../hill.jpg",
    "../forest.jpg",
    "../ocean.jpg",
    "../bear.jpg",
    "../river.jpg",
    "../sunset.jpg",
  ];

  const nextImage = () => {
    setCurrIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <ImageSlider image={images[currIndex]} />
      <Controls nextImage={nextImage} prevImage={prevImage} />
    </div>
  );
}
