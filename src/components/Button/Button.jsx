import PropTypes from 'prop-types';
import s from 'components/Styles.module.css';

function Button({ onClick }) {
  return (
    <button className={s.Button} type="button" onClick={onClick}>
      Load more
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
