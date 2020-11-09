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
const keys = require("../config/prod");
const base_profile_details_1 = require("../common/base-profile-details");
const ProfileModel = mongoose_1.default.model("Port_Profile_Details");
const router = express_1.default.Router();
router.get("/api/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let finalresult;
    const profile = yield ProfileModel.findOne({
        profilename: keys.username,
    });
    if (profile) {
        finalresult = new base_profile_details_1.ProfileDetails(profile.get("_id"), profile.get("fullname"), profile.get("position"), profile.get("currcompany"), profile.get("city"), profile.get("state"), profile.get("emailid"), profile.get("facebookURL"), profile.get("twitterURL"), profile.get("instagramURL"), profile.get("linkedinURL"), profile.get("profilePic")).parseDetails();
    }
    res.status(200).send(finalresult);
}));
module.exports = router;
