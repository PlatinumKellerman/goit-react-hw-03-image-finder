import { LoadButton } from './LoadMoreButton.styled';

export const LoadMoreButton = props => {
  return (
    <>
      <LoadButton onClick={props.loadMore}>
        <span>Load more</span>
      </LoadButton>
    </>
  );
};
