"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var SubscribeSchema = new mongoose_1.Schema({
    email: String,
    date: { type: Date, "default": Date.now }
});
var SubscribeModal = mongoose_1["default"].model("Subscribe", SubscribeSchema);
exports["default"] = SubscribeModal;
