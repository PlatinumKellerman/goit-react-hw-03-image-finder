import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
// import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
// import * as yup from 'yup';

export class Searchbar extends Component {
  state = {
    pictureName: '',
  };

  // const validationSchema = yup.object().shape({
  //   name: yup.string().required('This field cannot be empty')
  // });

  handlePictureNameChagne = e => {
    this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.pictureName);
    this.setState({ pictureName: '' });
  };

  render() {
    return (
      <>
        <header>
          <Formik
            initialValues={{ name: '' }}
            // validationSchema={schema}
          >
            <Form onSubmit={this.handleSubmit}>
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
            </Form>
          </Formik>
        </header>
      </>
    );
  }
}
