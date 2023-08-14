"use strict";
exports.__esModule = true;
exports.AddressSchema = void 0;
var mongoose_1 = require("mongoose");
exports.AddressSchema = new mongoose_1.Schema({
    cityName: String,
    cityID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "City" },
    street: String,
    home: Number,
    entrance: String,
    userID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "User" }
});
var AddressModal = mongoose_1["default"].model("Address", exports.AddressSchema);
exports["default"] = AddressModal;
