import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
const keys = require("./src/config/prod");

require("./src/models/Profile");
require("./src/models/TimeLine");
require("./src/models/Skills");
require("./src/models/Project");

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
const getTimelineDetailsRoute = require("./src/routes/get-career-timeline");
const getSkillDetailsRoute = require("./src/routes/get-skills-details");
const getProjectDetailsRoute = require("./src/routes/get-project-details");

app.use(getProfileDetailsRoute);
app.use(getTimelineDetailsRoute);
app.use(getSkillDetailsRoute);
app.use(getProjectDetailsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server API App listening on Port ${PORT}`));
