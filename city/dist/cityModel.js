"use strict";
exports.__esModule = true;
exports.CitySchema = void 0;
var mongoose_1 = require("mongoose");
exports.CitySchema = new mongoose_1.Schema({
    cityName: String,
    cityID: Number
});
var CityModal = mongoose_1["default"].model("CityList", exports.CitySchema);
exports["default"] = CityModal;
