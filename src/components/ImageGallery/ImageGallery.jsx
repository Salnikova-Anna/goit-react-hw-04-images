import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <ImageGalleryStyled>
        {images.map(image => (
          <ImageGalleryItem
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            key={image.id}
          />
        ))}
      </ImageGalleryStyled>
    </>
  );
};
