import { useState } from "react";
import ImageSlider from "./ImageSlider.jsx";
import Controls from "./Controls.jsx";

export default function Slider() {
  // State for current image index
  const [currIndex, setCurrIndex] = useState(0);
  
  // Array of image paths
  const images = [
    "../bird.jpg",
    "../animals.jpg",
    "../ocean.jpg",
    "../bear.jpg",
    "../mountain.jpg",
    "../forest.jpg",
    "../river.jpg",
    "../sunset.jpg",
  ];

  // Function to go to the next image
  const nextImage = () => {
    setCurrIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Display current image */}
      <ImageSlider image={images[currIndex]} />
      {/* Control buttons */}
      <Controls nextImage={nextImage} prevImage={prevImage} />
    </div>
  );
}
