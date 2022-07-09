import { ImageGalleryItem } from '../ImageGalleryItem/index';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = props => {
  return (
    <>
      <GalleryList>
        <ImageGalleryItem pics={props.pics} />
      </GalleryList>
    </>
  );
};
