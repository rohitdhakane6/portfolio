// models/intro.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var introSchema = new Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

var Intro = mongoose.model("Intro", introSchema);

module.exports = Intro;
