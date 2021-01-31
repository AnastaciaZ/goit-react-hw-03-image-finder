import React from 'react';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, openModal})=> {
  return (
  <>
    {images.map(({id, webformatURL, tags, largeImageURL}) => (
      <li key={id} className={s.ImageGalleryItem} onClick={ ()=>openModal(largeImageURL, tags)}>
                <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
            </li>
        ))}
</>
  );
};

export default ImageGalleryItem;