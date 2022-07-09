import { Component } from 'react';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled.js';

export class ImageGalleryItem extends Component {
  render() {
    const picturesArray = this.props.pics;
    return picturesArray.map(picture => {
      return (
        <GalleryItem key={picture.id}>
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
