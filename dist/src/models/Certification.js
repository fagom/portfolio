"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const CertificationSchema = new Schema({
    name: String,
    provider: String,
    CertificateLink: String,
});
module.exports = mongoose_1.default.model("certification_details", CertificationSchema, "certification_details");
