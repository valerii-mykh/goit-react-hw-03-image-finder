import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from 'components/Styles.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    src: PropTypes.string,
    alt: PropTypes.string,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  backDropClick = event => {
    console.log('click');
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.backDropClick}>
        <div className={s.Modal}>
          <img src={this.props.modalImg.img} alt={this.props.modalImg.tags} key={this.props.modalImg.id} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalImg: PropTypes.object,
};
