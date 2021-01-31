import { Component } from 'react';
import { toast } from 'react-toastify';
import s from '../Searchbar/Searchbar.module.css';

export default class Searchbar extends Component { 
  state = {
    inputValue: '',
  };

    handleChange = event => {
        this.setState({ inputValue: event.target.value.toLowerCase() });
    };

    handleSubmit = event => {
      event.preventDefault();
      
       if (this.state.inputValue.trim() === '') { 
      toast.warn('Введите слово для поиска');
      return;
    }

        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
    };

    render() { 
    return (
      <header className={s.Searchbar}>
        <form onSubmit={ this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            name="imageName"
            value={this.state.inputValue}
            onChange={ this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}