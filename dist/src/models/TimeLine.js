"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const TimeLineSchema = new Schema({
    year: String,
    title: String,
    summary: Array,
});
module.exports = mongoose_1.default.model("career_timeline_details", TimeLineSchema, "career_timeline_details");
