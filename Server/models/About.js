// models/About.js
import { Schema, model } from 'mongoose';

const aboutSchema = new Schema({
  lottieURL: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const About = model('About', aboutSchema);

export default About;
