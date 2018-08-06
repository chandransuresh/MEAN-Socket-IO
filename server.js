const express = require('express');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const toDoRoutes = require('./routes/todo.js');
const socketIO = require('socket.io');

const port = process.env.port || 3000;

const app = express();

const ToDo = require('./models/todo');

mongoose.connect('mongodb://<user>:<password>@ds259070.mlab.com:59070/socketapp-todo')
.then(() => {
  console.log('Connected');
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/todo', toDoRoutes);

const server = http.createServer(app);
const io = socketIO(server);
app.set('io', io);

app.use(express.static(path.join(__dirname, 'dist')));


server.listen(port);
