import { Schema } from "mongoose";
interface Project {
    data: {
        _id: Schema.Types.ObjectId;
        title: string;
        description: string;
        githubURL: string;
        websiteURL: string;
        status: string;
    };
}
declare abstract class ProjectInterface<T extends Project> {
    abstract data: T["data"];
}
export declare class ProjectDetails extends ProjectInterface<Project> {
    data: Project["data"];
    constructor(_id: Schema.Types.ObjectId, title: string, description: string, githubURL: string, websiteURL: string, status: string);
    parseDetails(): {
        _id: Schema.Types.ObjectId;
        title: string;
        description: string;
        githubURL: string;
        websiteURL: string;
        status: string;
    };
}
export {};
