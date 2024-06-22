import React, { useState } from 'react';
function PhotoGallery() {
    const [photos] = useState([
        {
            id: 1,
            src: "./Image1.jpg",
            caption: 'Beautiful Sunset',
        },
        {
            id: 2,
            src: 'photo2.jpg',
            caption: 'Snowy Mountains',
        },
        {
            id: 3,
            src: 'photo3.jpg',
            caption: 'City Skyline',
        },
    ]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const openPhoto = (photo) => {
        setSelectedPhoto(photo);
    };
    const closePhoto = () => {
        setSelectedPhoto(null);
    };
    return (
        <div>
            <h1>Photo Gallery</h1>
            <div className="gallery">
                {photos.map((photo) => (
                    <div key={photo.id} className="photo">
                        <img
                            src={photo.src}
                            alt={photo.caption}
                            onClick={() => openPhoto(photo)}
                        />
                        <p>{photo.caption}</p>
                    </div>
                ))}
            </div>
            {selectedPhoto && (
                <div className="lightbox">
                    <img src={selectedPhoto.src} alt={selectedPhoto.caption} />
                    <p>{selectedPhoto.caption}</p>
                    <button onClick={closePhoto}>Close</button>
                </div>
            )}
        </div>
    );
}
export default PhotoGallery;