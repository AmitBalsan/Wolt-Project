"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    password: String,
    userType: Number,
    licenseID: String
});
