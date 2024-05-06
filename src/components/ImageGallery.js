import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="gallery">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          alt={image.tags}
          onClick={() => onClick(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
