"use strict";
if (process.env.NODE_ENV === "production") {
    module.exports = {
        mongoURI: process.env.MONGOURI,
        username: process.env.USERNAME,
    };
}
else {
    const keys = require("./keys");
    module.exports = {
        mongoURI: keys.mongoURI,
        username: keys.username,
    };
}
