import { getImagesBySearchQuery } from 'api/images';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { useEffect, useState } from 'react';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShowLoadMoreBtn, setIsShowLoadMoreBtn] = useState(false);
  const [page, setPage] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);

  const perPage = 12;

  const handleSubmitBtn = value => {
    setSearchQuery(value);
    setPage(1);
    setImages([]);
    setIsEmpty(false);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);

        const data = await getImagesBySearchQuery(searchQuery, page, perPage);

        if (data.hits.length === 0) {
          setIsEmpty(true);
          setIsShowLoadMoreBtn(false);
          return;
        }

        setImages(prev => [...prev, ...data.hits]);
        setIsShowLoadMoreBtn(page < Math.ceil(data.totalHits / perPage));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    searchQuery && fetchImages();
  }, [page, searchQuery]);

  const handleLoadMoreBtn = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmitBtn} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isShowLoadMoreBtn && <Button handleLoadMoreBtn={handleLoadMoreBtn} />}
      {error && <p style={{ textAlign: 'center' }}>Sorry. {error}</p>}
      {isEmpty && (
        <p style={{ textAlign: 'center' }}>Sorry. There are no images ... </p>
      )}
    </div>
  );
};
