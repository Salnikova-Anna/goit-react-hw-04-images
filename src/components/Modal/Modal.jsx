import { useEffect } from 'react';
import { ModalStyled, Overlay } from './Modal.styled';

export const Modal = ({ toggleModal, largeImageURL, tags }) => {
  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    const handleEscPress = evt => {
      if (evt.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleEscPress);

    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [toggleModal]);

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalStyled>
        <img src={largeImageURL} alt={tags} />
      </ModalStyled>
    </Overlay>
  );
};
