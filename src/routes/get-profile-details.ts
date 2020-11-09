import express from "express";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const keys = require("../config/prod");
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
      profile.get("position"),
      profile.get("currcompany"),
      profile.get("city"),
      profile.get("state"),
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
