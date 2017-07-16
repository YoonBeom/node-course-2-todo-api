var mongoose = require('mongoose');

// Schema
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true, // Must exist
    minlength: 1,
    trim: true // 다듬다, 손질하다
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
