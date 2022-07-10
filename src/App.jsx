import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { AppContainer } from './components/services/AppContainer/index';
import { Searchbar } from './components/Searchbar/index';
import { ImageGallery } from './components/ImageGallery/index';
import { getPic, options } from './components/services/Api';
import { Loader } from 'components/Loader/index';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    pictureName: '',
    picturesArray: [],
    isLoading: false,
    currentPage: 1,
    totalPages: null,
    totalHits: null,
    largeImageURL: '',
  };

  handleImageNameSubmit = pictureName => {
    if (pictureName !== this.state.pictureName) {
      this.setState({ pictureName, currentPage: 1, picturesArray: [] });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
    if (this.state.currentPage === this.state.totalPages - 1) {
      toast.error('End of gallery');
    }
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
      .then(pics => {
        this.setState(prevState => ({
          picturesArray: [...prevState.picturesArray, ...pics],
          totalPages: options.params.totalPages,
          totalHits: options.params.totalHits,
        }));
        const largeImg = pics.map(pic => {
          return pic.largeImageURL;
        });
        this.setState({ largeImageURL: largeImg });
        console.log(this.state.largeImageURL);
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { totalHits, picturesArray, totalPages } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleImageNameSubmit} />
        {this.state.picturesArray.length > 0 && (
          <ImageGallery
            pics={picturesArray}
            loadMore={this.loadMore}
            totalHits={totalHits}
            totalPages={totalPages}
          />
        )}
        {this.state.isLoading && <Loader />}
        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}
