const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ToDo = require('./../models/todo');

router.post('/', (req, res) => {
  const io = req.app.get('io');
  const toDo = new ToDo({
    description: req.body.description
  });
  toDo.save().then(()=> {
    io.emit('newTaskAdded');
  });
});

router.get('/', (req, res) => {
  ToDo.find({}).then((todos) => {
    res.send(todos);
  });
});
module.exports = router;
