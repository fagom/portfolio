import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  fullname: String,
  emailid: String,
  facebookURL: String,
  twitterURL: String,
  instagramURL: String,
  linkedinURL: String,
  profilePic: String,
});

module.exports = mongoose.model(
  "Port_Profile_Details",
  ProfileSchema,
  "Port_Profile_Details"
);
