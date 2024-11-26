import "./App.css";
import Gallery from "./Gallery.js";

function App() {
  return (
    <div className="main">
      <div className="container">
        <header>
          <h1>Design Showcase</h1>
        </header>
        <p>A repostory of bits, pieces, and experiments in design.</p>

        <Gallery />
      </div>
    </div>
  );
}

export default App;
