import { Schema } from "mongoose";
interface Skills {
    data: {
        _id: Schema.Types.ObjectId;
        skillcode: string;
        value: Number;
    };
}
declare abstract class SkillInterface<T extends Skills> {
    abstract data: T["data"];
}
export declare class SkillsDetails extends SkillInterface<Skills> {
    data: Skills["data"];
    constructor(_id: Schema.Types.ObjectId, skillcode: string, value: Number);
    parseDetails(): {
        _id: Schema.Types.ObjectId;
        skillcode: string;
        value: Number;
    };
}
export {};
