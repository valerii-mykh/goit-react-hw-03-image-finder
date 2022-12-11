import { Audio } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Spinner() {
  return (
    <div className="Loader">
      <Audio height="80" width="80" radius="9" color="green" ariaLabel="three-dots-loading" wrapperStyle wrapperClass />
    </div>
  );
}

export default Spinner;
