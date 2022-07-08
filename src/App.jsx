import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './components/Searchbar/index';
import { ImageGallery } from './components/ImageGallery/index';
import { getPic } from './components/services/Api';

export class App extends Component {
  state = {
    pictureName: '',
    picturesArray: [],
    isLoading: false,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const prevImgName = prevState.pictureName;
  //   const currentImgName = this.state.pictureName;
  //   if (prevImgName !== currentImgName) {
  //     getPic(currentImgName).then(pics =>
  //       this.setState({ picturesArray: pics })
  //     );
  //     console.log(this.state.picturesArray);
  //   }
  // }

  handleImageNameSubmit = pictureName => {
    this.setState({ pictureName });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImgName = prevState.pictureName;
    const currentImgName = this.state.pictureName;
    if (currentImgName !== prevImgName) {
      this.fetchPictures(currentImgName);
      console.log(this.fetchPictures(currentImgName));
    }
  }

  fetchPictures = () => {
    const currentImgName = this.state.pictureName;
    getPic(currentImgName).then(pics => this.setState({ picturesArray: pics }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleImageNameSubmit} />
        {this.state.picturesArray.lenth > 0 && (
          <ImageGallery handlePicture={this.handlePicture} />
        )}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
