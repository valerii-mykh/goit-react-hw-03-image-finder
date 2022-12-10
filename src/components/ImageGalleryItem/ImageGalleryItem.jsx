// import PropTypes from 'prop-types';
import { Component } from 'react';
import s from 'components/Styles.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={s.ImageGalleryItem}>
        <img src="" alt="" className={s.ImageGalleryItem_image} />
      </li>
    );
  }
}
