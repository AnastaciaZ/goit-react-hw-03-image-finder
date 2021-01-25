import { Component } from 'react';
import Loader from "react-loader-spinner";
//import Loader from '../Loader/Loader';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from '../ImageGallery/ImageGallery.module.css';
import Button from '../Button/Button';
//import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
    page: 1,
    showModal: false,
    
  };

   componentDidUpdate(prevProps, prevState) { 
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) { 
      this.setState({ status: 'pending' });
      
      fetch(`https://pixabay.com/api/?q=${nextName}&page=${this.page}&key=19205756-78e39cd266210d4983cef747c&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => { 
          if (response.ok) { 
            return response.json();
          }
          return Promise.reject(
            new Error(`Нет фото с именем ${nextName}`),
          );
        })
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

  };
  
  loadMore() {
    this.page += 1;
  /*window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});*/
    
  /*this.setState({page: this.page + 1});
    console.log(this.loadMore);*/
  };
  /*toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };*/

  
  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') { 
      return <div className={s.loader}>Введите имя картинки</div>;
    }

    if (status === 'pending') { 
      return <div className={s.loader}>
        <Loader type="ThreeDots"
                color="#3f51b5"
                height={50}
                width={50}
          timeout={3000} />
      </div>;

    }

    if (status === 'rejected') { 
      return <h1>{ error.message}</h1>;
    }

    if (status === 'resolved') { 
      return (
        <div>
        <ul className={ s.ImageGallery}>
            <ImageGalleryItem images={images}/>
             {/*showModal={this.toggleModal()}*/}
              
          </ul>
          <Button loadMore={this.loadMore} />
          {/*<Modal onClose={this.toggleModal}
            images={ images}/>*/}
          </div>
      );
    }    
  }
}
