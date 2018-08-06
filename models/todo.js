const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
  description : {
    type: String
  }
});

const todoModel = mongoose.model('todo', todoSchema);
module.exports = todoModel;


