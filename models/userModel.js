const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ['true', 'A user must have a name'],
  },
  email: {
    type: String,
    required: ['true', 'A user must have a email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: ['true', 'A user must have a password'],
    trim: true,
    minlength: 8,
    select: false, // This will not show the password in the response
  },
  passwordConfirm: {
    type: String,
    required: ['true', 'A user must have a passwordConfirm'],
    trim: true,
    minlength: 8,
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
    },
  },
});
/*
 * This is a Mongoose middleware that will run before the save() and create() methods
 * This will not run on update() or findByIdAndUpdate()
 */
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
