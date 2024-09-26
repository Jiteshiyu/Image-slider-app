export default function ImageSlider({ image }) {
  return (
    <div className="img-slider">
      <img src={image} alt="img-slide" className="img" />
    </div>
  );
}
