import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  skillcode: String,
  value: Number,
});

module.exports = mongoose.model(
  "skills_details",
  SkillSchema,
  "skills_details"
);
