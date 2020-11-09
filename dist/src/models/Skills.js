"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const SkillSchema = new Schema({
    skillcode: String,
    value: Number,
});
module.exports = mongoose_1.default.model("skills_details", SkillSchema, "skills_details");
