import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcSearch } from 'react-icons/fc';
import {
  StyledHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
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
    e.target.reset();
  };

  render() {
    return (
      <>
        <StyledHeader>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <FcSearch size={32} />
            </SearchFormButton>
            <SearchFormInput
              name="name"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handlePictureNameChagne}
            />
          </SearchForm>
        </StyledHeader>
      </>
    );
  }
}
