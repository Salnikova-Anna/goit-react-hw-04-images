import { useState } from 'react';
import {
  ImageGalleryItemImage,
  ImageGalleryItemStyled,
} from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  const onImageClick = evt => {
    evt.preventDefault();
    toggleModal();
  };

  return (
    <>
      <ImageGalleryItemStyled onClick={onImageClick}>
        <ImageGalleryItemImage src={webformatURL} alt={tags} />
      </ImageGalleryItemStyled>
      {isShowModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};
