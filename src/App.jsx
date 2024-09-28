import "./App.css";
import Slider from "./components/Slider.jsx";

export default function App() {
  return (
    <div className="app">
      {/* Main heading */}
      <h1 className="app-heading">Snapslide</h1>
      {/* Render Slider component */}
      <Slider />
    </div>
  );
}
