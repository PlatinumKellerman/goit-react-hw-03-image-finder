import { ImageGalleryItem } from '../ImageGalleryItem/index';
import { GalleryList } from './ImageGallery.styled';
import { LoadMoreButton } from '../LoadMoreButton/index';

import { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    const NumberOfPics = this.props.pics.length;
    const totalHits = this.props.totalHits;
    return (
      <>
        <GalleryList>
          <ImageGalleryItem pics={this.props.pics} />
        </GalleryList>
        {NumberOfPics >= 12 && NumberOfPics < totalHits && (
          <LoadMoreButton loadMore={this.props.loadMore} />
        )}
      </>
    );
  }
}
