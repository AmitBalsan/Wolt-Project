"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CartSchema = new mongoose_1.Schema({
    resID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "Restaurant" },
    userID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "User" },
    sellerID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "User" },
    dishID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "Dish" },
    date: { type: Date, "default": Date.now },
    dishName: String,
    price: Number
});
var CartModal = mongoose_1["default"].model("Cart", CartSchema);
exports["default"] = CartModal;
