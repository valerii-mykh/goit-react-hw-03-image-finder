import PropTypes from 'prop-types';

import s from 'components/Styles.module.css';

export default function ImageGalleryItem({ webformatURL, tags, toggleModal, bigImg }) {
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() => {
        toggleModal();
        bigImg();
      }}
    >
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  bigImg: PropTypes.func.isRequired,
};
