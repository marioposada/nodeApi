const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ['true', 'A user must have a name'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: ['true', 'A user must have a email'],
    unique: true,
    trim: true,
  },
  photo: {
    type: String,
    required: ['true', 'A user must have a photo'],
    trim: true,
  },
  password: {
    type: String,
    required: ['true', 'A user must have a password'],
    trim: true,
  },
  passwordConfirm: {
    type: String,
    required: ['true', 'A user must have a passwordConfirm'],
    trim: true,
  },
});
