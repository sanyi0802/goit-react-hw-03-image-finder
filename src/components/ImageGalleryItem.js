import React from 'react';

const ImageGalleryItem = ({ webformatURL, alt, onClick }) => {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img src={webformatURL} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
