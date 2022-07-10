import { LoadButton } from './LoadMoreButton.styled';
import PropTypes from 'prop-types';

export const LoadMoreButton = props => {
  return (
    <>
      <LoadButton onClick={props.loadMore}>
        <span>Load more</span>
      </LoadButton>
    </>
  );
};

LoadMoreButton.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
