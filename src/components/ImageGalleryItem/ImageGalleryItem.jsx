import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled.js';

export class ImageGalleryItem extends Component {
  render() {
    const picturesArray = this.props.pics;
    return picturesArray.map(({ id, webformatURL, tags, largeImageURL }) => {
      return (
        <GalleryItem key={id}>
          <GalleryImage
            onClick={() => {
              this.props.onModalOpen(largeImageURL);
            }}
            src={webformatURL}
            alt={tags}
            loading="lazy"
          ></GalleryImage>
        </GalleryItem>
      );
    });
  }
}

ImageGalleryItem.propTypes = {
  pics: PropTypes.array.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};
