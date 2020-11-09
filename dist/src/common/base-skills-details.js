"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsDetails = void 0;
class SkillInterface {
}
class SkillsDetails extends SkillInterface {
    constructor(_id, skillcode, value) {
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
exports.SkillsDetails = SkillsDetails;
