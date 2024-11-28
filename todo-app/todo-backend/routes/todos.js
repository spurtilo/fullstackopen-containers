const express = require('express');
const { Todo } = require('../mongo');
const { getAsync, setAsync } = require('../redis/index');

const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* GET statistics */
router.get('/statistics', async (_, res) => {
  const todoCount = await getAsync('added_todos');
  response = {
    added_todos: todoCount ? parseInt(todoCount) : 0,
  };
  res.status(200).json(response);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });

  let todoCount = await getAsync('added_todos');
  todoCount = todoCount ? parseInt(todoCount) : 0;
  await setAsync('added_todos', todoCount + 1);

  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.send(req.todo);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  try {
    req.todo.set(req.body);
    await req.todo.save();
    res.status(200).json(req.todo);
  } catch (error) {
    console.error('Error updating todo:', error.message);
    res.status(500).json({ error: 'Failed to update the todo' });
  }
});

router.use('/:id', findByIdMiddleware, singleRouter);

module.exports = router;
