import { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
//import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
//import Loader from './components/Loader/Loader';
//import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
//import Loader from "react-loader-spinner";
//import s from './App.module.css';


import './App.css';

export default class App extends Component {
  state = {
    imageName: '',
    showModal: false,  
    images: null,
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
    
  render() { 
    const { showModal, imageName } = this.state;

 return (
   <div>
     <Searchbar onSubmit={this.handleFormSubmit} />
     <ImageGallery imageName={imageName} />
     {showModal && (
       <Modal onClose={this.toggleModal}>
        {/*<img src={hits.largeImageURL} alt={ hits.tags}/>*/}
     </Modal>
     )}
     
     {/*<Button onLoadMore={ this.onLoadMore}/>*/}
    </div>
  );
}
};
 