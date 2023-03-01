import PropTypes from 'prop-types';
import { LoadMoreBtn } from './LoadMore.styled';

const LoadMore = ({ onClick, isLoading }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load More
    </LoadMoreBtn>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func,
};

export default LoadMore;