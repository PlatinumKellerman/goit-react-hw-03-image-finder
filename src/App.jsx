import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { AppContainer } from './components/services/AppContainer/index';
import { Searchbar } from './components/Searchbar/index';
import { ImageGallery } from './components/ImageGallery/index';
import { getPic, options } from './components/services/Api';
import { Loader } from 'components/Loader/index';

export class App extends Component {
  state = {
    pictureName: '',
    picturesArray: [],
    isLoading: false,
    currentPage: 1,
    totalPages: null,
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
    const currentPage = this.state.currentPage;
    getPic(currentImgName, currentPage)
      .then(pics =>
        this.setState({
          picturesArray: pics,
          totalPages: options.params.totalPages,
        })
      )
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    console.log(this.state.totalPages);
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
