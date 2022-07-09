import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { AppContainer } from './components/services/AppContainer/index';
import { Searchbar } from './components/Searchbar/index';
import { ImageGallery } from './components/ImageGallery/index';
import { getPic } from './components/services/Api';
import { Loader } from 'components/Loader/index';

export class App extends Component {
  state = {
    pictureName: '',
    picturesArray: [],
    isLoading: false,
  };

  handleImageNameSubmit = pictureName => {
    this.setState({ pictureName });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImgName = prevState.pictureName;
    const currentImgName = this.state.pictureName;
    if (currentImgName !== prevImgName) {
      this.setState({ isLoading: true });
      this.fetchPictures(currentImgName);
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
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleImageNameSubmit} />
        {this.state.isLoading && <Loader />}
        {this.state.picturesArray.length > 0 && (
          <ImageGallery pics={this.state.picturesArray} />
        )}
        <ToastContainer autoClose={2000} />
      </AppContainer>
    );
  }
}
