// routes/portfolioRoutes.js
const router = require('express').Router();
import { Intro,About,Project,Contact,Experience,Courses } from '../models';

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

router.post('/update-intro', async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: 'Intro updated successfully',
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/update-about', async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: 'Abouts updated successfully',
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
