import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from './Blog';

describe('<Blog />', () => {
  const mockRemoveHandler = vi.fn();
  const mockLikeHandler = vi.fn();

  beforeEach(() => {
    const blog = {
      author: 'Robert C. Martin',
      id: '65df3c440251db72bb36557d',
      likes: 55,
      title: 'Type wars',
      url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
      user: {
        username: 'teppo',
        name: 'Teppo Testinen',
        id: '65df0339f14fc4b193a7e45a',
      },
    };
    render(
      <Blog
        blog={blog}
        currentUser={blog.user}
        removeBlog={mockRemoveHandler}
        handleLikes={mockLikeHandler}
      />
    );
  });

  test('renders title and author', () => {
    const title = screen.getByText('Type wars', { exact: false });
    const author = screen.getByText('Robert C. Martin', { exact: false });

    expect(title).toBeDefined();
    expect(author).toBeDefined();
  });

  test('URL, likes, and user are shown when the view button has been clicked', async () => {
    const user = userEvent.setup();
    const viewButton = screen.getByText('View');
    await user.click(viewButton);

    const url = screen.getByText(
      'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
      { exact: false }
    );
    const likes = screen.getByText(55, { exact: false });
    const username = screen.getByText('Teppo Testinen', { exact: false });

    expect(url).not.toHaveStyle('display: none');
    expect(likes).not.toHaveStyle('display: none');
    expect(username).not.toHaveStyle('display: none');
  });

  test('if the like button is clicked twice, the event handler is called twice', async () => {
    const user = userEvent.setup();
    const likeButton = screen.getByText('Like');
    await user.dblClick(likeButton);

    expect(mockLikeHandler.mock.calls).toHaveLength(2);
  });
});
