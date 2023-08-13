"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var OrderSchema = new mongoose_1.Schema({
    userID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "User" },
    resID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "Restaurant" },
    sellerID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "User" },
    date: { type: Date, "default": Date.now },
    total: Number,
    items: Number,
    status: { type: String, "default": "New" }
});
var OrderModal = mongoose_1["default"].model("Order", OrderSchema);
exports["default"] = OrderModal;
