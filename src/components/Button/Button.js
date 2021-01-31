import React from 'react';
import s from '../Button/Button.module.css';

const Button = ({onLoadMore}) => {
  return (
    <div className={ s.loader}>
      <button type="button" onClick={() => onLoadMore()} className={s.Button}>Load more</button>
    </div >
      );
};
  

export default Button;
