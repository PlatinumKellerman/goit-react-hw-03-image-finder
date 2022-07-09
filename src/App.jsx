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
      this.setState({ isLoading: true });
      this.fetchPictures(currentImgName);
      // console.log(prevImgName);
      // console.log(this.state.pictureName);
      // console.log(this.state.picturesArray);
    }
  }

  fetchPictures = () => {
    const currentImgName = this.state.pictureName;
    getPic(currentImgName)
      .then(pics => this.setState({ picturesArray: pics }))
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    console.log(this.state.isLoading);
    return (
      <div>
        <Searchbar onSubmit={this.handleImageNameSubmit} />
        {this.state.isLoading && <div>L O A D I N G</div>}
        {this.state.picturesArray.length > 0 && (
          <ImageGallery pics={this.state.picturesArray} />
        )}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
