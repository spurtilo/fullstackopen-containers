import Blog from './Blog';
import PropTypes from 'prop-types';

const BlogList = ({ blogs, currentUser, removeBlog, handleLikes }) => {
  return blogs.map((blog) => (
    <Blog
      key={blog.id}
      blog={blog}
      currentUser={currentUser}
      removeBlog={removeBlog}
      handleLikes={handleLikes}
    />
  ));
};

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  removeBlog: PropTypes.func.isRequired,
  handleLikes: PropTypes.func.isRequired,
};

export default BlogList;
