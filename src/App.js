import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './components/Searchbar/Searchbar';
import imagesApi from './services/imagesApi';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Loading from './components/Loader/Loading';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

import './App.css';

export default class App extends Component { 
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 0,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) { 
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {  
      
      this.setState({ loading: true });
      this.fetchImages();
      
    }
  }
  
  fetchImages = () => {
    const { searchQuery, page } = this.state;
    
    imagesApi
      .fetchImgQuery(searchQuery, page)
      .then(images => {
        if (images.length === 0) {
          toast.warn('К сожалению по вашему запросу ничего не найдено');
          return;
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }), this.scrollTo,
        )
      })
      .catch(error => this.setState( toast.error(`Oooops!${error.message}`)))
      .finally(() => this.setState({ loading: false }));
  };

  scrollTo = () => {
    setTimeout(() => {
      window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
    }, 1000);
  };

  handleFormSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 0,
      images: [],
    });
  };

 openModal = (largeImageURL) => {
   this.setState({ largeImageURL})
 };
  
closeModal = () => { 
  this.setState({ largeImageURL: null})
}
  
  render() { 
    const { images, loading, largeImageURL } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        
        {images.length > 0 && <ImageGallery
          images={images}
          openModal={this.openModal}>
          
          <ImageGalleryItem
            images={images}
            openModal={this.openModal} />
          
        </ImageGallery>}

        {loading && <Loading/>}

        {images.length > 0 && !loading && <Button onLoadMore={this.fetchImages} />}

        { largeImageURL && <Modal
          largeImageURL={largeImageURL}
          closeModal={ this.closeModal}/>}
      </div>
    );
  }
}


