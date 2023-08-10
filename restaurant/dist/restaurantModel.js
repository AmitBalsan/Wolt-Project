"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var RestaurantSchema = new mongoose_1.Schema({
    name: String,
    image: String,
    phone: String,
    bmNumber: String,
    userID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "User" },
    cityID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "City" },
    street: String
});
var RestaurantModal = mongoose_1["default"].model("Restaurant", RestaurantSchema);
exports["default"] = RestaurantModal;
