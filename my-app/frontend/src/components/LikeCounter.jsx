import PropTypes from 'prop-types';

const LikeCounter = ({ blog: { id, user, likes, ...props }, handleLikes }) => {
  const addLike = () => {
    const blogToUpdate = {
      user: user.id,
      likes: likes + 1,
      ...props,
    };
    handleLikes(id, blogToUpdate);
  };
  return (
    <>
      <span data-testid="likeCount">{likes}</span>{' '}
      <button data-testid="likeButton" onClick={addLike}>
        Like
      </button>
    </>
  );
};

LikeCounter.propTypes = {
  blog: PropTypes.object.isRequired,
  handleLikes: PropTypes.func.isRequired,
};

export default LikeCounter;
