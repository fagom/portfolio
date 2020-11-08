import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
const keys = require("./src/config/keys");

require("./src/models/Profile");

try {
  mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connection successful");
} catch (e) {
  throw e;
}

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const getProfileDetailsRoute = require("./src/routes/get-profile-details");

app.use(getProfileDetailsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server API App listening on Port ${PORT}`));
