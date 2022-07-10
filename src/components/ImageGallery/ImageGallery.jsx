import { ImageGalleryItem } from '../ImageGalleryItem/index';
import { GalleryList } from './ImageGallery.styled';
import { LoadMoreButton } from '../LoadMoreButton/index';
import { Modal } from '../Modal/index';
import { Component } from 'react';

export class ImageGallery extends Component {
  state = {
    isOpen: false,
    largeImageURL: '',
  };

  onModalOpen = largeImageURL => {
    this.setState({
      isOpen: true,
      largeImageURL: largeImageURL,
    });
  };

  onModalClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const NumberOfPics = this.props.pics.length;

    const totalHits = this.props.totalHits;
    const largeImageURL = this.state.largeImageURL;
    const tags = this.props.tags;
    return (
      <>
        <GalleryList>
          <ImageGalleryItem
            pics={this.props.pics}
            onModalOpen={this.onModalOpen}
          />
        </GalleryList>
        {NumberOfPics >= 12 && NumberOfPics < totalHits && (
          <LoadMoreButton loadMore={this.props.loadMore} />
        )}
        {this.state.isOpen && (
          <Modal
            onClose={this.onModalClose}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </>
    );
  }
}
