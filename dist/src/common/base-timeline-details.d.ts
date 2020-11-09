import { Schema } from "mongoose";
interface TimeLine {
    data: {
        _id: Schema.Types.ObjectId;
        year: string;
        title: string;
        summary: Array<String>;
    };
}
declare abstract class TimeLineInterface<T extends TimeLine> {
    abstract data: T["data"];
}
export declare class TimeLineDetails extends TimeLineInterface<TimeLine> {
    data: TimeLine["data"];
    constructor(_id: Schema.Types.ObjectId, year: string, title: string, summary: Array<String>);
    parseDetails(): {
        _id: Schema.Types.ObjectId;
        year: string;
        title: string;
        summary: String[];
    };
}
export {};
