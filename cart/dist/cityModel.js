"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CartSchema = new mongoose_1.Schema({
    resID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "Restaurant" }
});
var CartModal = mongoose_1["default"].model("Cart", CartSchema);
exports["default"] = CartModal;
