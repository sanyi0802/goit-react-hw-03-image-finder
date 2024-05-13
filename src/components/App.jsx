
import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import '../App.css';

const API_KEY = '43742042-70cb5d7b8a56c01df75a97367';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      query: '',
      page: 1,
      isLoading: false,
      showModal: false,
      largeImageURL: '',
    };
  }

  componentDidMount() {
    const { query, page } = this.state;
    if (!query) return;

    this.fetchImages(query, page);
  }

  fetchImages = async (query, page) => {
    const { images } = this.state;
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      this.setState({ images: [...images, ...data.hits] });
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearchSubmit = (newQuery) => {
    this.setState({ query: newQuery, page: 1, images: [] }, () => {
      this.fetchImages(newQuery, 1);
    });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), () => {
      this.fetchImages(this.state.query, this.state.page);
    });
  };

  handleImageClick = (url) => {
    this.setState({ largeImageURL: url, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <Button onClick={this.handleLoadMore} />}
        {showModal && <Modal largeImageURL={largeImageURL} alt="" onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;
