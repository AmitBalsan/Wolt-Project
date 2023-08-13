"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var OrderItemSchema = new mongoose_1.Schema({
    orderID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "Order" },
    userID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "User" },
    resID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "Restaurant" },
    sellerID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "User" },
    date: { type: Date, "default": Date.now },
    price: Number
});
var OrderItemModal = mongoose_1["default"].model("OrderItem", OrderItemSchema);
exports["default"] = OrderItemModal;
