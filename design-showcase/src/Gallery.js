import photoData from "./photoData.json";
import { useState } from "react";

function Photo({ photo }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOverlay() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <>
      <div className="galleryImg">
        <img src={photo.thumbnail} alt={photo.title} onClick={toggleOverlay} />
      </div>

      {isOpen ? (
        <div className="overlay">
          <div className="overlayContainer">
            <button className="galleryBtn" onClick={toggleOverlay}>
              X
            </button>
            <img src={photo.image} alt={photo.title} className="overlayImg" />
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default function Gallery() {
  const photos = photoData.photos;

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <Photo photo={photo} key={photo.id} />
      ))}
    </div>
  );
}
