import PropTypes from 'prop-types';
import s from 'components/Styles.module.css';

function Button({ handleClickBtn }) {
  return (
    <button className={s.Button} type="button" onClick={handleClickBtn}>
      Load more
    </button>
  );
}
Button.propTypes = {
  handleClickBtn: PropTypes.func.isRequired,
};
export default Button;
