import { ImageGalleryItem } from '../ImageGalleryItem/index';
import { GalleryList } from './ImageGallery.styled';
import { LoadMoreButton } from '../LoadMoreButton/index';

export const ImageGallery = props => {
  return (
    <>
      <GalleryList>
        <ImageGalleryItem pics={props.pics} />
      </GalleryList>
      {props.pics.length >= 12 && <LoadMoreButton />}
    </>
  );
};
