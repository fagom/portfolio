import express from "express";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;
const keys = require("../config/prod");

const ProjectModel = mongoose.model("project_details");
import { ProjectDetails } from "../common/base-project-details";

const router = express.Router();

router.get("/api/projects", async (req, res) => {
  let finalresult: any = [];

  const projects = await ProjectModel.find({ username: keys.username });

  if (projects) {
    projects.forEach((project) => {
      const data = new ProjectDetails(
        project.get("_id"),
        project.get("title"),
        project.get("description"),
        project.get("githubURL"),
        project.get("websiteURL"),
        project.get("Status")
      ).parseDetails();
      finalresult.push(data);
    });
  }
  res.status(200).send(finalresult);
});

module.exports = router;
