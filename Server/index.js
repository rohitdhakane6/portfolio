const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
dotenv.config();
const app = express();

const portfolio=require("./controller/portfolio")

// Adding middleware packages
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(helmet()); // Set security-related HTTP headers
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/v1",portfolio );

app.get("/", function (req, res) {
  res.send("Hello World!");
});

// Mongoose setup
const PORT = process.env.PORT || 6001;
app.listen(PORT, function () {
  // Setting strict mode for Mongoose queries
  mongoose.set("strictQuery", true);

  // Connecting to MongoDB
  mongoose
    .connect(process.env.MONGO_URL)
    .then(function () {
      console.log("Server listening on port " + PORT);
    })
    .catch(function (err) {
      console.error("Error connecting to MongoDB: " + err);
    });
});
