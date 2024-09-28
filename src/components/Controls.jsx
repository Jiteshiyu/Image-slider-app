export default function Controls({ nextImage, prevImage }) {
  return (
    <div className="ctrls">
      {/* Button to go to the previous image */}
      <button onClick={prevImage} className="prev-btn btn">
        Previous
      </button>
      {/* Button to go to the next image */}
      <button onClick={nextImage} className="next-btn btn">
        Next
      </button>
    </div>
  );
}
