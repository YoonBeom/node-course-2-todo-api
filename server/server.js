var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('//////// Started on port 3000 ////////');
});


// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo.')
// });

// var newTodo2 = new Todo({
//   text: 'Something to do'
// });
//
// newTodo2.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo.', e);
// });

// User email - require it - trim it - set type - set min length of 1

// var newUser = new User({
//   email: 'overcam1@gmail.com'
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved User.', doc);
// }, (e) => {
//   console.log('Unable to save User.', e);
// });

// save new Something
