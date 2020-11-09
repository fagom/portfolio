"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileDetails = void 0;
class ProfileInterface {
}
class ProfileDetails extends ProfileInterface {
    constructor(_id, fullname, position, currcompany, city, state, emailid, facebookURL, twitterURL, instagramURL, linkedinURL, profilePic) {
        super();
        this.data = {
            _id,
            fullname,
            position,
            currcompany,
            city,
            state,
            emailid,
            facebookURL,
            twitterURL,
            instagramURL,
            linkedinURL,
            profilePic,
        };
    }
    parseDetails() {
        return this.data;
    }
}
exports.ProfileDetails = ProfileDetails;
