import PropTypes from 'prop-types';

const RemoveBlogButton = ({ blogId, title, author, removeBlog }) => {
  const deleteBlog = () => {
    if (!window.confirm(`Remove blog ${title} by ${author}`)) return;
    removeBlog(blogId);
  };
  return (
    <button data-testid="removeButton" onClick={deleteBlog}>
      Remove
    </button>
  );
};

RemoveBlogButton.propTypes = {
  blogId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  removeBlog: PropTypes.func.isRequired,
};

export default RemoveBlogButton;
