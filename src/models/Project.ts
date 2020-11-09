import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: String,
  description: String,
  githubURL: String,
  websiteURL: String,
  status: String,
});

module.exports = mongoose.model(
  "project_details",
  ProjectSchema,
  "project_details"
);
