import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './components/Searchbar/index';
import { ImageGallery } from './components/ImageGallery/index';

export class App extends Component {
  state = {
    pictureName: '',
  };

  handleImageNameSubmit = pictureName => {
    this.setState({ pictureName });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleImageNameSubmit} />
        <ImageGallery pictureName={this.state.pictureName} />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
