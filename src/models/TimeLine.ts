import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TimeLineSchema = new Schema({
  year: String,
  title: String,
  summary: Array,
});

module.exports = mongoose.model(
  "career_timeline_details",
  TimeLineSchema,
  "career_timeline_details"
);
