import { Schema } from "mongoose";

interface Skills {
  data: {
    _id: Schema.Types.ObjectId;
    skillcode: string;
    value: Number;
  };
}

abstract class SkillInterface<T extends Skills> {
  abstract data: T["data"];
}

export class SkillsDetails extends SkillInterface<Skills> {
  data: Skills["data"];

  constructor(_id: Schema.Types.ObjectId, skillcode: string, value: Number) {
    super();

    this.data = {
      _id,
      skillcode,
      value,
    };
  }

  parseDetails() {
    return this.data;
  }
}
