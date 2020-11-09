"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const ObjectId = mongoose_1.default.Types.ObjectId;
const keys = require("../config/keys");
const SkillModel = mongoose_1.default.model("skills_details");
const base_skills_details_1 = require("../common/base-skills-details");
const router = express_1.default.Router();
router.get("/api/skills", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let finalresult = [];
    const skills = yield SkillModel.find({ username: keys.username });
    if (skills) {
        skills.forEach((skill) => {
            const data = new base_skills_details_1.SkillsDetails(skill.get("_id"), skill.get("skillcode"), skill.get("value")).parseDetails();
            finalresult.push(data);
        });
    }
    res.status(200).send(finalresult);
}));
module.exports = router;
