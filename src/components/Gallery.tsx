import React, { useState } from 'react';
import './Gallery.css';
import happyKids from '../images/happy_kids.jpg';

const Gallery: React.FC = () => {
  const [modal, setModal] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: happyKids,
      alt: 'Happy children playing'
    },
    {
      id: 2,
      src: happyKids,
      alt: 'Learning time'
    },
    {
      id: 3,
      src: happyKids,
      alt: 'Outdoor play'
    },
    {
      id: 4,
      src: happyKids,
      alt: 'Art and crafts'
    },
    {
      id: 5,
      src: happyKids,
      alt: 'Story time'
    },
    {
      id: 6,
      src: happyKids,
      alt: 'Group activities'
    }
  ];


  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Our Gallery</h2>
          <p>See the joy and learning happening every day at Rainbow Preschool & Day Care</p>
        </div>


        <div className="gallery-grid">
          {galleryImages.map((image, i) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setModal(i)}
              style={{ cursor: 'pointer' }}
            >
              <div className="gallery-image">
                <img src={image.src} alt={image.alt} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h4>{image.alt}</h4>
                    <p>Click to view larger</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {modal !== null && (
          <div className="modal" onClick={() => setModal(null)}>
            <img src={galleryImages[modal].src} alt={galleryImages[modal].alt} />
            <button className="modal-close" onClick={(e) => { e.stopPropagation(); setModal(null); }}>×</button>
            <button className="modal-prev" onClick={(e) => { e.stopPropagation(); setModal(modal > 0 ? modal - 1 : galleryImages.length - 1); }}>‹</button>
            <button className="modal-next" onClick={(e) => { e.stopPropagation(); setModal(modal < galleryImages.length - 1 ? modal + 1 : 0); }}>›</button>
            <span>{modal + 1}/{galleryImages.length}</span>
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;
