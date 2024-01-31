require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});

import { set, connect } from "mongoose";
import express ,{json} from "express";
import dotenv from "dotenv";
import helmet from "helmet";
const bodyParser = require('body-parser');
import cors from "cors";
dotenv.config();
const router=require('./Routes');
const app = express();

// Adding middleware packages
app.use(json()); // Parse incoming JSON requests
app.use(helmet()); // Set security-related HTTP headers
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/v1",router)







app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Mongoose setup
const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
  // Setting strict mode for Mongoose queries
  set("strictQuery", true);

  // Connecting to MongoDB
  connect(process.env.MONGO_URL)
    .then(() => {
      console.log(`Server listening on port ${PORT}`);
    })
    .catch((err) => {
      console.error(`Error connecting to MongoDB: ${err}`);
    });
});
