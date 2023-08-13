"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var DishSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    image: String,
    notes: String,
    resID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "Restaurant" },
    userID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "User" },
    date: { type: Date, "default": Date.now }
});
var DishModal = mongoose_1["default"].model("Dish", DishSchema);
exports["default"] = DishModal;
