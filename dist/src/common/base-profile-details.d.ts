import { Schema } from "mongoose";
interface Profile {
    data: {
        _id: Schema.Types.ObjectId;
        fullname: string;
        position: string;
        currcompany: string;
        city: string;
        state: string;
        emailid: string;
        facebookURL: string;
        twitterURL: string;
        instagramURL: string;
        linkedinURL: string;
        profilePic: string;
        additionaldetails: string;
    };
}
declare abstract class ProfileInterface<T extends Profile> {
    abstract data: T["data"];
}
export declare class ProfileDetails extends ProfileInterface<Profile> {
    data: Profile["data"];
    constructor(_id: Schema.Types.ObjectId, fullname: string, position: string, currcompany: string, city: string, state: string, emailid: string, facebookURL: string, twitterURL: string, instagramURL: string, linkedinURL: string, profilePic: string, additionaldetails: string);
    parseDetails(): {
        _id: Schema.Types.ObjectId;
        fullname: string;
        position: string;
        currcompany: string;
        city: string;
        state: string;
        emailid: string;
        facebookURL: string;
        twitterURL: string;
        instagramURL: string;
        linkedinURL: string;
        profilePic: string;
        additionaldetails: string;
    };
}
export {};
