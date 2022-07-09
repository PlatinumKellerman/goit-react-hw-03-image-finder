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
    totalHits: null,
  };

  handleImageNameSubmit = (pictureName, currentPage) => {
    this.setState({ pictureName, currentPage });
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImgName = prevState.pictureName;
    const currentImgName = this.state.pictureName;
    const prevPage = prevState.currentPage;
    const currentPage = this.state.currentPage;
    if (currentImgName !== prevImgName || prevPage !== currentPage) {
      this.setState({ isLoading: true });
      this.fetchPictures();
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
          totalHits: options.params.totalHits,
        })
      )
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleImageNameSubmit} />
        {this.state.isLoading && <Loader />}
        {this.state.picturesArray.length > 0 && (
          <ImageGallery
            pics={this.state.picturesArray}
            loadMore={this.loadMore}
          />
        )}
        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}
