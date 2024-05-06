import React, { useEffect } from 'react';

const Modal = ({ largeImageURL, alt, onClose }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
