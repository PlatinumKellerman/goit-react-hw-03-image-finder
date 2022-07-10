import { Component } from 'react';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled.js';
import { Modal } from '../Modal/index';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
    largeImageURL: '',
  };

  onModalOpen = () => {
    this.setState({ isOpen: true });
  };

  onModalClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    {
      this.state.isOpen && <Modal onClose={this.onModalClose} />;
    }
    const picturesArray = this.props.pics;
    return picturesArray.map(picture => {
      return (
        <GalleryItem key={picture.id} onClick={this.onModalOpen}>
          <GalleryImage
            src={picture.webformatURL}
            alt={picture.tags}
            loading="lazy"
          ></GalleryImage>
        </GalleryItem>
      );
    });
  }
}
