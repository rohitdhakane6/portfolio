// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    // You might want to validate this field further, ensuring it's one of ['Male', 'Female', 'Other'].
  },
  email: {
    type: String,
    required: true,
    // You might want to add validation for the email format.
  },
  mobile: {
    type: String,
    required: true,
    // You might want to add validation for the mobile number format.
  },
  age: {
    type: String,
    required: true,
    // You might want to validate that this is a valid age.
  },
  address: {
    type: String,
    required: true,
  },
  // Additional fields as needed
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
