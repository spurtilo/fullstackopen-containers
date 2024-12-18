import { useState } from 'react';
import PropTypes from 'prop-types';

const BlogForm = ({ createBlog }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const addBlog = (event) => {
    event.preventDefault();
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl,
    });

    setNewTitle('');
    setNewAuthor('');
    setNewUrl('');
  };

  return (
    <div>
      <form onSubmit={addBlog}>
        <div>
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            value={newTitle}
            name="Title"
            data-testid="titleInput"
            onChange={(event) => setNewTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Author">Author</label>
          <input
            type="text"
            value={newAuthor}
            name="Author"
            data-testid="authorInput"
            onChange={(event) => setNewAuthor(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="URL">URL</label>
          <input
            type="text"
            value={newUrl}
            name="URL"
            data-testid="urlInput"
            onChange={(event) => setNewUrl(event.target.value)}
          />
        </div>
        <button type="submit" data-testid="blogSubmitButton">
          Submit
        </button>
      </form>
    </div>
  );
};

BlogForm.propTypes = {
  createBlog: PropTypes.func.isRequired,
};

export default BlogForm;
