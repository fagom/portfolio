import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CertificationSchema = new Schema({
  name: String,
  provider: String,
  CertificateLink: String,
});
module.exports = mongoose.model(
  "certification_details",
  CertificationSchema,
  "certification_details"
);
