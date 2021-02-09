import express from "express";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;
const keys = require("../config/prod");

const CertificationModel = mongoose.model("certification_details");
import { CertificationDetails } from "../common/base-certification-details";

const router = express.Router();

router.get("/api/getcertifications", async (req, res) => {
  let finalresult: any = [];

  const certificates = await CertificationModel.find({
    username: keys.username,
  });

  if (certificates) {
    certificates.forEach((item: any) => {
      const data = new CertificationDetails(
        item.get("_id"),
        item.get("name"),
        item.get("provider"),
        item.get("CertificateLink")
      ).parseDetails();
      finalresult.push(data);
    });
  }
  res.status(200).send(finalresult);
});

module.exports = router;
