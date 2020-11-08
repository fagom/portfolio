import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import axios from "axios";

const ObjectId = mongoose.Types.ObjectId;

const keys = require("../config/keys");
import { ProfileDetails } from "../common/base-profile-details";

const ProfileModel = mongoose.model("Port_Profile_Details");

const router = express.Router();

router.get("/api/profile", async (req, res) => {
  let finalresult;

  const profile = await ProfileModel.findOne({
    profilename: keys.username,
  });

  if (profile) {
    finalresult = new ProfileDetails(
      profile.get("_id"),
      profile.get("fullname"),
      profile.get("emailid"),
      profile.get("facebookURL"),
      profile.get("twitterURL"),
      profile.get("instagramURL"),
      profile.get("linkedinURL"),
      profile.get("profilePic")
    ).parseDetails();
  }

  res.status(200).send(finalresult);
});

module.exports = router;
