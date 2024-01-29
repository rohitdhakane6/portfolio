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
    // Link to the GitHub repository (optional)
  },
  demoLink: {
    type: String,
    // Link to a live demo or project showcase (optional)
  },
  // Additional fields
  client: {
    type: String,
    // Client or company name (optional)
  },
  duration: {
    type: String,
    // Project duration (e.g., "3 months", "1 year", etc.) (optional)
  },
  teamMembers: {
    type: [String],
    // Array of team members involved in the project (optional)
  },
  // Add more fields as needed
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
