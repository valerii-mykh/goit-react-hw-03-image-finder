import { Component } from 'react';
import PropTypes from 'prop-types';
import pixabayApi from 'components/Api/Api';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button/Button';

import s from 'components/Styles.module.css';
import Spinner from 'components/Loader/Spinner';

class ImageGallery extends Component {
  state = {
    gallery: [],
    error: null,
    status: 'idle',
  };

  static propTypes = {
    onClickImg: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    handleClickBtn: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (nextPage > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }

    if (prevQuery !== nextQuery) {
      this.setState({ gallery: [], status: 'pending' });
    }

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      pixabayApi
        .fetchImages(nextQuery, nextPage)
        .then(({ hits }) => {
          const images = hits.map(({ id, webformatURL, largeImageURL, tags }) => {
            return { id, webformatURL, largeImageURL, tags };
          });
          // console.log(images);
          if (images.length > 0) {
            this.setState(prevState => {
              return {
                gallery: [...prevState.gallery, ...images],
                status: 'resolved',
              };
            });
          } else {
            alert(`По запросу ${nextQuery} ничего не найдено.`);
            this.setState({ status: 'idle' });
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { onClickImg, handleClickBtn } = this.props;
    const { gallery, error, status } = this.state;

    if (status === 'idle') {
      return <></>;
    }

    if (status === 'pending') {
      return (
        <>
          <ul className={s.imageGallery}>
            {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  src={webformatURL}
                  dataSrc={largeImageURL}
                  tags={tags}
                  onClick={onClickImg}
                />
              );
            })}
          </ul>
          <Spinner className={s.Loader} />
        </>
      );
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={s.imageGallery}>
            {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  src={webformatURL}
                  dataSrc={largeImageURL}
                  tags={tags}
                  onClick={onClickImg}
                />
              );
            })}
          </ul>
          <Button
            className={s.Button}
            handleClickBtn={() => {
              this.setState({ status: 'pending' });
              handleClickBtn();
            }}
          />
        </>
      );
    }
  }
}

export default ImageGallery;
