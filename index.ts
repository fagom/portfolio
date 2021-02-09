import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
const keys = require("./src/config/prod");

require("./src/models/Profile");
require("./src/models/TimeLine");
require("./src/models/Skills");
require("./src/models/Project");
require("./src/models/Certification");

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
const getCertificationDetailsRoute = require("./src/routes/get-certification-details");

app.use(getProfileDetailsRoute);
app.use(getTimelineDetailsRoute);
app.use(getSkillDetailsRoute);
app.use(getProjectDetailsRoute);
app.use(getCertificationDetailsRoute);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  //Express will server up production assets like main.js or main.css file
  const path = require("path");
  const root = path.join(__dirname, "../", "client", "build");
  app.use(express.static(root));
  //Express will serve up index.html if it doesnt recognise the route

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    );
  });
}

app.listen(PORT, () => console.log(`Server API App listening on Port ${PORT}`));
