import express from "express";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;
const keys = require("../config/keys");

const SkillModel = mongoose.model("skills_details");
import { SkillsDetails } from "../common/base-skills-details";

const router = express.Router();

router.get("/api/skills", async (req, res) => {
  let finalresult: any = [];

  const skills = await SkillModel.find({ username: keys.username });

  if (skills) {
    skills.forEach((skill) => {
      const data = new SkillsDetails(
        skill.get("_id"),
        skill.get("skillcode"),
        skill.get("value")
      ).parseDetails();
      finalresult.push(data);
    });
  }
  res.status(200).send(finalresult);
});

module.exports = router;
