// routes/adminRoutes.js
const router = require('express').Router();
import { User } from '../models';
const jwt = require('jsonwebtoken');

// Admin login
router.post("/login", async (req, res) => {
  try {
    // Check if the email and password match
    const user = await User.findByUsernameAndPassword(
      req.body.username,
      req.body.password
    );

    // Generate JWT token for the user
    const token = user.genratjwttoken();

    // Respond with token and success status
    return res.status(201).json({ token, status: "success" });
  } catch (error) {
    console.error(error);
    // Handle the error, possibly send an error response to the client
    return res.status(500).json({ error: error.message });
  }
});

// router.post("/register", async (req, res) => {
//   try {
//     // Check if the username already exists
//     const existingUser = await User.findOne({ username: req.body.username });
//     if (existingUser) {
//       return res.status(400).json({ error: "Username already exists" });
//     }

//     // Create a new user
//     const newUser = new User({
//       username: req.body.username,
//       password: req.body.password,
//       // Add more fields as needed
//     });

//     // Save the new user to the database
//     await newUser.save();

//     // Generate JWT token for the new user
//     const token = newUser.generateJwtToken();

//     // Respond with token and success status
//     return res.status(201).json({ token, status: "success" });
//   } catch (error) {
//     console.error(error);
//     // Handle the error, possibly send an error response to the client
//     return res.status(500).json({ error: error.message });
//   }
// });



module.exports = router;
