import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/index';

export class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul>
          <ImageGalleryItem pictureName={this.props.pictureName} />
        </ul>
      </>
    );
  }
}
