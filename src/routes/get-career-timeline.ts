import express from "express";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;
const keys = require("../config/keys");

import { TimeLineDetails } from "../common/base-timeline-details";

const TimeLineModel = mongoose.model("career_timeline_details");

const router = express.Router();

router.get("/api/timeline", async (req, res) => {
  let finalresult: any = [];

  const timeline = await TimeLineModel.find({ username: keys.username });

  if (timeline) {
    timeline.forEach((item) => {
      const data = new TimeLineDetails(
        item.get("_id"),
        item.get("year"),
        item.get("title"),
        item.get("summary")
      ).parseDetails();
      finalresult.push(data);
    });
  }
  res.status(200).send(finalresult);
});

module.exports = router;
