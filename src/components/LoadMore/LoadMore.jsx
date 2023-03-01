import PropTypes from 'prop-types';
import { LoadMoreBtn } from './LoadMore.styled';

const LoadMore = ({ onClick, isLoading }) => {
  if(isLoading) { return null; }
  else {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load More
    </LoadMoreBtn>
  );
}};

LoadMore.propTypes = {
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default LoadMore;