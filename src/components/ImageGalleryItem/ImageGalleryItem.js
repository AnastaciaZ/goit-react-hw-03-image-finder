import React from 'react';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images: { hits}, onClose})=> {
  return (
  <>
    {hits.map(hit => (
      <li key={hit.id} className={s.ImageGalleryItem} onClick={()=>onClose(hits.largeImageURL) }>
          <img src={hit.webformatURL} alt={hit.tags} className={s.ImageGalleryItemImage} />
        </li>
      ))}
</>
  );
};

export default ImageGalleryItem;


