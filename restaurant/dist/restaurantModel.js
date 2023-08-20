"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var cityModel_1 = require("../city/cityModel");
var RestaurantSchema = new mongoose_1.Schema({
    name: String,
    image: String,
    phone: String,
    bmNumber: String,
    userID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "User" },
    cityID: cityModel_1.CitySchema,
    street: String,
    notes: String,
    minTime: Number,
    maxTime: Number,
    addressID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "Address" }
});
var RestaurantModal = mongoose_1["default"].model("Restaurant", RestaurantSchema);
exports["default"] = RestaurantModal;
