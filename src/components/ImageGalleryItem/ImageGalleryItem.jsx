import { Component } from 'react';
// import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pictureName !== this.props.pictureName) {
      console.log(prevProps.pictureName);
      console.log(this.props.pictureName);
    }
  }

  render() {
    return (
      <>
        <li>{this.props.pictureName}</li>
      </>
    );
  }
}
