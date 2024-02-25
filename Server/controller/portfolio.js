const router = require('express').Router();
const models = require('../models');
const Intro = models.Intro;
const About = models.About;
const Project = models.Project;
const Contact = models.Contact;
const Experience = models.Experience;
const Courses = models.Courses;
router.get('/get-all-data', async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const courses = await Courses.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experiences: experiences,
      courses: courses,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
