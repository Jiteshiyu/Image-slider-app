export default function Controls({ nextImage, prevImage }) {
  return (
    <div className="ctrls">
      <button onClick={prevImage} className="prev-btn btn">
        Previous
      </button>
      <button onClick={nextImage} className="next-btn btn">
        Next
      </button>
    </div>
  );
}
