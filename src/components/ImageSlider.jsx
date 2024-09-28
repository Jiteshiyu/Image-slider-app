export default function ImageSlider({ image }) {
  return (
    <div className="img-slider">
      {/* Image for the slider */}
      <img src={image} alt="img-slide" className="img" />
    </div>
  );
}
