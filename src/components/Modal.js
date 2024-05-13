import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, alt } = this.props;

    return (
      <div className="overlay" onClick={this.handleOverlayClick}>
        <div className="modal">
          <img src={largeImageURL} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
