import React from 'react';
import s from '../ImageGallery/ImageGallery.module.css';

export default function ImageGallery({children, openModal }) { 
    return (
        <div className={s.container}>
            <ul className={ s.imageGallery}>
                {children}
            </ul>
        </div>
    );
}
