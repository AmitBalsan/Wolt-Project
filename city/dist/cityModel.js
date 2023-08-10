"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CitySchema = new mongoose_1.Schema({
    cityName: String,
    cityID: Number
});
var CityModal = mongoose_1["default"].model("City", CitySchema);
exports["default"] = CityModal;
