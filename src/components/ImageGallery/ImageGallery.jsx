import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/index';

export class ImageGallery extends Component {
  render() {
    return (
      <div>
        <ul>
          <ImageGalleryItem pics={this.props.pics} />
        </ul>
      </div>
    );
  }
}
