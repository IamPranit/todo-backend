const Todo = require("../models/Todo");
const ErrorResponse = require("../utils/errorResponse");

// @desc   Get all todos
// @route  GET api/v1/todos
// @access Public
exports.getTodos = async (req, res, next) => {
  try {
    const todo = await Todo.find();

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    next(err);
  }
};

// @desc   Get single todo
// @route  GET /api/v1/todos/:id
// @access Public
exports.getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return next(
        new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    next(err);
  }
};

// @desc   Create new Todo
// @route  POST /api/v1/todos
// @access Public
exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);

    res.status(201).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    next(err);
  }
};

// @desc   Update single todo
// @route  PUT /api/v1/todos/:id
// @access Public
exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    next(err);
  }
};

// @desc   Delete single bootcamp
// @route  DELETE api/v1/todos/:id
// @access Public
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return next(
        new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
      );
    }

    todo.remove();

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    next(err);
  }
};
