import { useState } from 'react';
import Modal from '../Modal/Modal';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ articles }) => {
  const [openModal, setOpenModal] = useState(false);
  const [largeimage, setLargeimage] = useState('');

  const onClose = () => setOpenModal(false);

  const getImglarge = e => {
    if (e.target === e.currentTarget) {
      return;
    }
    const openModalGallery = e.target.closest('li').getAttribute('a');
    setOpenModal(true);
    setLargeimage(openModalGallery);
  };

  return (
    <>
      <ul className={styles.ImageGallery} onClick={getImglarge}>
        <ImageGalleryItem articles={articles} />
      </ul>
      {openModal && <Modal onClose={onClose} largeimage={largeimage} />}
    </>
  );
};

export default ImageGallery;
