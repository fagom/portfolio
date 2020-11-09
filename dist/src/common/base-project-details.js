"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectDetails = void 0;
class ProjectInterface {
}
class ProjectDetails extends ProjectInterface {
    constructor(_id, title, description, githubURL, websiteURL, status) {
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
exports.ProjectDetails = ProjectDetails;
