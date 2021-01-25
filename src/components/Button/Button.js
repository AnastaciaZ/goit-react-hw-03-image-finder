import React from 'react';
//import { Component } from 'react';
import s from '../Button/Button.module.css';


const Button = ({ loadMore }) => {
  return (
    <div className={ s.loader}>
      <button type="button" onClick={() =>loadMore()} className={s.Button}>Load more</button>
    </div >
      );
};
  

export default Button;

/*export default class Button extends Component { 

  /*loadMore = () => {
    //this.page += 1;
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <div className={ s.loader}>
      <button type="button" onClick={()=>this.props.loadMore()} className={s.Button}>Load more</button>
    </div>
    )
  }
}*/
