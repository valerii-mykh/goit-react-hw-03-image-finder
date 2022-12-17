import PropTypes from 'prop-types';

import s from 'components/Styles.module.css';

export default function ImageGalleryItem({ src, tags, onClick }) {
  return (
    <li className={s.ImageGalleryItem} onClick={onClick}>
      <img src={src} alt={tags} className={s.ImageGalleryItemImage} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
