import { Schema } from "mongoose";

interface TimeLine {
  data: {
    _id: Schema.Types.ObjectId;
    year: string;
    title: string;
    summary: Array<String>;
  };
}

abstract class TimeLineInterface<T extends TimeLine> {
  abstract data: T["data"];
}

export class TimeLineDetails extends TimeLineInterface<TimeLine> {
  data: TimeLine["data"];
  constructor(
    _id: Schema.Types.ObjectId,
    year: string,
    title: string,
    summary: Array<String>
  ) {
    super();
    this.data = {
      _id,
      year,
      title,
      summary,
    };
  }

  parseDetails() {
    return this.data;
  }
}
