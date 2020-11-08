"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ProfileSchema = new Schema({
    fullname: String,
    emailid: String,
    facebookURL: String,
    twitterURL: String,
    instagramURL: String,
    linkedinURL: String,
    profilePic: String,
});
module.exports = mongoose_1.default.model("Port_Profile_Details", ProfileSchema, "Port_Profile_Details");
