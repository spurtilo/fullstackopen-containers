import PropTypes from 'prop-types';

const Todo = ({ todo, onClickComplete, onClickDelete }) => {
  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={onClickDelete(todo)}> Delete </button>
      </span>
    </>
  );

  const notDoneInfo = (
    <>
      <span>This todo is not done</span>
      <span>
        <button onClick={onClickDelete(todo)}> Delete </button>
        <button onClick={onClickComplete(todo)}> Set as done </button>
      </span>
    </>
  );

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '70%',
          margin: 'auto',
        }}
      >
        <span data-testid="todoText">{todo.text}</span>
        {todo.done ? doneInfo : notDoneInfo}
      </div>
    </>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
  onClickComplete: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default Todo;
