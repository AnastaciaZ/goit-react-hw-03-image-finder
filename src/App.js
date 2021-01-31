import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";

import Searchbar from './components/Searchbar/Searchbar';
import imagesApi from './services/imagesApi';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

import s from './App.module.css';
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

  componentDidMount() {
    this.setState({ loading: true });
  }

  componentDidUpdate(prevProps, prevState) { 
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {  
      this.fetchImages();
      this.setState({ loading: true });
      
    }
  }
  
  fetchImages = () => {
    const { searchQuery, page } = this.state;
    
    imagesApi
      .fetchImgQuery(searchQuery, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }), this.scrollTo,
        ),
    )
      .catch(error => this.setState({ error }))
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
    const { images, error, loading, largeImageURL } = this.state;

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

        {error && <h1>{error.message}</h1>}

        {loading && <div className={s.loader}>
          <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={50}
        width={50}
        timeout={2000}/>
        </div>}
        
        {images.length > 0 && <ImageGallery
          images={images}
          openModal={this.openModal}>
          
          <ImageGalleryItem
            images={images}
            openModal={this.openModal} />
          
        </ImageGallery>}

        {images.length > 0 && !loading && <Button onLoadMore={this.fetchImages} />}

        { largeImageURL && <Modal
          largeImageURL={largeImageURL}
          closeModal={ this.closeModal}/>}
      </div>
    );
  }
}


