import { Component } from 'react';
import { Searchbar } from './components/Searchbar/index';

export class App extends Component {
  state = {
    pictureName: '',
  };

  handleImageNameSubmit = pictureName => {
    this.setState({ pictureName });
    console.log(pictureName);
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleImageNameSubmit} />
      </div>
    );
  }
}
