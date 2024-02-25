// models/index.js
var Project = require('./project');
var About = require('./about');
var Contact = require('./contact');
var Courses = require('./Courses');
var Intro = require('./intro');
var User = require('./User');
var Experience = require('./Experience');

// Export all models
module.exports = {
  Project: Project,
  About: About,
  Contact: Contact,
  Courses: Courses,
  Intro: Intro,
  User: User,
  Experience: Experience,
};
