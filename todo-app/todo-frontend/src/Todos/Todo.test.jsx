import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';

describe('<Todo />', () => {
  const mockDeleteHandler = vi.fn();
  const mockCompleteHandler = vi.fn();

  beforeEach(() => {
    const todo = {
      _id: '1',
      text: 'Something to do',
      done: false,
    };

    render(
      <Todo
        todo={todo}
        onClickDelete={() => mockDeleteHandler}
        onClickComplete={() => mockCompleteHandler}
      />
    );
  });

  it('renders content', () => {
    const todoText = screen.getByText('Something to do');
    const doneStatus = screen.getByText('This todo is not done');
    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    const doneButton = screen.getByRole('button', { name: 'Set as done' });

    expect(todoText).toBeDefined();
    expect(doneStatus).toBeDefined();
    expect(deleteButton).toBeDefined();
    expect(doneButton).toBeDefined();
  });

  it('calls onClickComplete when "Set as done" button is clicked', async () => {
    const user = userEvent.setup();
    const doneButton = screen.getByRole('button', { name: 'Set as done' });

    await user.click(doneButton);

    expect(mockCompleteHandler.mock.calls).toHaveLength(1);
  });

  it('calls onClickDelete when "Delete" button is clicked', async () => {
    const user = userEvent.setup();
    const deleteButton = screen.getByRole('button', { name: 'Delete' });

    await user.click(deleteButton);

    expect(mockDeleteHandler.mock.calls).toHaveLength(1);
  });
});
