import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from 'components/Styles.module.css';

function ImageGallery({ query, toggleModal, bigImg }) {
  return (
    <ul className={s.ImageGallery}>
      {query.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
          tags={tags}
          toggleModal={() => toggleModal()}
          bigImg={() => bigImg(id, largeImageURL, tags)}
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
