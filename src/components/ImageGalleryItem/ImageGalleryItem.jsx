import { Component } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    picturesArray: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImgName = prevProps.pictureName;
    const currentImgName = this.props.pictureName;
    if (prevImgName !== currentImgName) {
      const KEY = '28501478-ddcb693bd2c6ca45180585ddb';
      const BASE_URL = 'https://pixabay.com/api/';
      const START_PAGE = 1;
      const IMG_PER_PAGE = 12;
      const URL = `${BASE_URL}?q=${currentImgName}&page=${START_PAGE}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${IMG_PER_PAGE}`;

      const getImg = () => {
        return fetch(URL)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
          })
          .then(pictures => this.setState({ picturesArray: pictures.hits }));
      };
      getImg();
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
