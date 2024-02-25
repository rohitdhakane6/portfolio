// models/Courses.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var coursesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    // This could be a link to an image or the actual image data, depending on your requirements.
  },
  link: {
    type: String,
    required: true,
    // This is typically a link to the course page or resource.
  },
  // Additional fields as needed
});

var Courses = mongoose.model('Courses', coursesSchema);

module.exports = Courses;
