import { Component } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  // state = {
  //   picturesArray: [],
  //   isLoading: false,
  // };

  render() {
    const picturesArray = this.props.pics;
    return picturesArray.map(pic => {
      return <li key={pic.id}>{pic.id}</li>;
    });
  }
}
