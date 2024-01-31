// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// import dotenv from 'dotenv';
// dotenv.config();

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

// Method to generate JWT token for the user
userSchema.methods.genratjwttoken = function () {
  return jwt.sign({ user: this._id.toString() }, process.env.JWT_CERT,{expiresIn: '1h'});
};

// Static method to find a user by username and password
userSchema.statics.findByUsernameAndPassword = async function (username, password) {
  const user = await this.findOne({ username });

  if (!user) {
    throw new Error("User does not exist.");
  }

  // Compare Passwords using bcrypt
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Invalid Password!");
  }

  return user;
};

// Middleware to hash the password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
