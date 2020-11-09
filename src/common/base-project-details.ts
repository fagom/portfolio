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

abstract class ProjectInterface<T extends Project> {
  abstract data: T["data"];
}

export class ProjectDetails extends ProjectInterface<Project> {
  data: Project["data"];

  constructor(
    _id: Schema.Types.ObjectId,
    title: string,
    description: string,
    githubURL: string,
    websiteURL: string,
    status: string
  ) {
    super();
    this.data = {
      _id,
      title,
      description,
      githubURL,
      websiteURL,
      status,
    };
  }

  parseDetails() {
    return this.data;
  }
}
