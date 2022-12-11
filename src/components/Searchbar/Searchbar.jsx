import PropTypes from 'prop-types';
import { Component } from 'react';
import s from 'components/Styles.module.css';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInputChange = e => {
    const { value } = e.currentTarget;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.reset();
  };

  reset = () => {
    this.setState({ value: '' });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={value}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
