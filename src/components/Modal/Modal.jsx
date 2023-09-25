import { useEffect } from 'react';
import { ModalStyled, Overlay } from './Modal.styled';

export const Modal = ({ hideModal, largeImageURL, tags }) => {
  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      hideModal();
    }
  };

  useEffect(() => {
    const handleEscPress = evt => {
      if (evt.code === 'Escape') {
        hideModal();
      }
    };

    document.addEventListener('keydown', handleEscPress);

    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [hideModal]);

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalStyled>
        <img src={largeImageURL} alt={tags} />
      </ModalStyled>
    </Overlay>
  );
};
