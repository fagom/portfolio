"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const keys = require("./src/config/prod");
require("./src/models/Profile");
require("./src/models/TimeLine");
require("./src/models/Skills");
require("./src/models/Project");
try {
    mongoose_1.default.connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB connection successful");
}
catch (e) {
    throw e;
}
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const getProfileDetailsRoute = require("./src/routes/get-profile-details");
const getTimelineDetailsRoute = require("./src/routes/get-career-timeline");
const getSkillDetailsRoute = require("./src/routes/get-skills-details");
const getProjectDetailsRoute = require("./src/routes/get-project-details");
app.use(getProfileDetailsRoute);
app.use(getTimelineDetailsRoute);
app.use(getSkillDetailsRoute);
app.use(getProjectDetailsRoute);
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
    //Express will server up production assets like main.js or main.css file
    app.use(express_1.default.static("../client/build"));
    //Express will serve up index.html if it doesnt recognise the route
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../", "client", "build", "index.html"));
    });
}
app.listen(PORT, () => console.log(`Server API App listening on Port ${PORT}`));
