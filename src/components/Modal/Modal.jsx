import { Component } from 'react';
import { Overlay, ModalDiv } from './Modal.styled';

export class Modal extends Component {
  render() {
    return (
      <Overlay>
        <ModalDiv>
          <p onClick={this.props.onModalClose}>M O D A L</p>
          <img src="" alt="" />
        </ModalDiv>
      </Overlay>
    );
  }
}
