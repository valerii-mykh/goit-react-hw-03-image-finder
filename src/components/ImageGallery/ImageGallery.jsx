import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from 'components/Styles.module.css';

function ImageGallery({ query, onClickImg }) {
  return (
    <ul className={s.ImageGallery}>
      {query.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem key={id} src={webformatURL} tags={tags} dataSrc={largeImageURL} onClick={onClickImg} />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onClickImg: PropTypes.func,
};

export default ImageGallery;
