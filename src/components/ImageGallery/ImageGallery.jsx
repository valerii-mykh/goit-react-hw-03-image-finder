import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from 'components/Styles.module.css';

function ImageGallery({ query, toggleModal, bigImg }) {
  return (
    <ul className={s.ImageGallery}>
      {query.map(el => (
        <ImageGalleryItem
          key={el.id}
          largeImageURL={el.largeImageURL}
          webformatURL={el.webformatURL}
          tags={el.tags}
          toggleModal={() => toggleModal()}
          bigImg={() => bigImg(el.id, el.largeImageURL, el.tags)}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  query: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
  bigImg: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
