import { Schema } from "mongoose";
interface Profile {
  data: {
    _id: Schema.Types.ObjectId;
    fullname: string;
    emailid: string;
    facebookURL: string;
    twitterURL: string;
    instagramURL: string;
    linkedinURL: string;
    profilePic: string;
  };
}

abstract class ProfileInterface<T extends Profile> {
  abstract data: T["data"];
}

export class ProfileDetails extends ProfileInterface<Profile> {
  data: Profile["data"];

  constructor(
    _id: Schema.Types.ObjectId,
    fullname: string,
    emailid: string,
    facebookURL: string,
    twitterURL: string,
    instagramURL: string,
    linkedinURL: string,
    profilePic: string
  ) {
    super();
    this.data = {
      _id,
      fullname,
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
