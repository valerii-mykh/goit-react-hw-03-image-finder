// import PropTypes from 'prop-types';
import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from 'components/Styles.module.css';

export default class ImageGallery extends Component {
  render() {
    return <ul class={s.ImageGallery}>{<ImageGalleryItem />}</ul>;
  }
}
