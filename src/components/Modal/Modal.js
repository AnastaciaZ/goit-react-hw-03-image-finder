import { Component } from 'react';
//import React from 'react';
//const basicLightbox = require('basiclightbox');
//import * as basicLightbox from 'basiclightbox';
import s from '../Modal/Modal.module.css';


export default class Modal extends Component { 

  /*state = {
    images: null,
  }*/
  componentDidMount() { 
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };


  render() { 
    
    return (
      <div className={s.Overlay} onClick={ this.handleBackdropClick}>
      <div className={s.Modal}>
          {/*{this.props.children}*/}
          {/*<img src={hit.largeImageURL} alt={ hit.tags}/>*/}
      </div>
        </div>
        );
  };

}

/*const Modal = ({ images: { hits } }) => {
  
  const instance = basicLightbox.create(`
<img src="assets/images/image.png" width="800" height="600">
`)

instance.show()*/



/*export default class Modal extends Component { 
  state = {
    images: null,
    isOpen: false,
  };

  handleSubmit(e) { 
    e.preventDefault();
  };
  showModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() { 
    return (
      <Modal isOpen={this.state.isOpen}>
        <div className={s.Overlay}>
      <div className={s.Modal}>
        <img src={hits.largeImageURL} alt={ hits.tags} />
      </div>
    </div>
      </Modal>
    )
  }*/
  
