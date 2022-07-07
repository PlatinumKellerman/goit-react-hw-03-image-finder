import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/index';

export class ImageGallery extends Component {
  render() {
    console.log(this.props.pictureName);
    return (
      <>
        <ul>
          <ImageGalleryItem pictureName={this.props.pictureName} />
        </ul>
      </>
    );
  }
}
