"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const keys = require("./src/config/keys");
require("./src/models/Profile");
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
app.use(getProfileDetailsRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server API App listening on Port ${PORT}`));
