import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcSearch } from 'react-icons/fc';
// import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    pictureName: '',
  };

  handlePictureNameChagne = e => {
    this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.pictureName.trim() === '') {
      toast.error('This field cannot be empty ;)');
      return;
    }
    this.props.onSubmit(this.state.pictureName);
    this.setState({ pictureName: '' });
  };

  render() {
    return (
      <>
        <header>
          <form onSubmit={this.handleSubmit}>
            <button type="submit">
              <FcSearch height="16" width="16" />
              Search
            </button>
            <input
              name="name"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handlePictureNameChagne}
            />
          </form>
        </header>
      </>
    );
  }
}
