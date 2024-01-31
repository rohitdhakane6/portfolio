// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  githubLink: {
    type: String,
  },
 
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
