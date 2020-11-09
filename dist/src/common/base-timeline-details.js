"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeLineDetails = void 0;
class TimeLineInterface {
}
class TimeLineDetails extends TimeLineInterface {
    constructor(_id, year, title, summary) {
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
exports.TimeLineDetails = TimeLineDetails;
