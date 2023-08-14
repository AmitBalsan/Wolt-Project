"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
var subscribeRoute_1 = require("./subscribe/subscribeRoute");
var userRoute_1 = require("./userDB/userRoute");
var restaurantRoute_1 = require("./restaurant/restaurantRoute");
var dishRoute_1 = require("./dish/dishRoute");
var cartRoute_1 = require("./cart/cartRoute");
var cookie_parser_1 = require("cookie-parser");
var orderRoute_1 = require("./order/orderRoute");
var cityRoute_1 = require("./city/cityRoute");
var addressRoute_1 = require("./address/addressRoute");
dotenv.config();
var uri = process.env.MONGOOSE_URI + "WoltProject";
var port = process.env.PORT;
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () { return console.log("DB connected"); })["catch"](function (error) {
        console.log(error);
    });
}
else {
    console.log("No URI");
}
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(cookie_parser_1["default"]());
app.use(express_1["default"].static("./public"));
app.use("/api", subscribeRoute_1["default"]);
app.use("/api", userRoute_1["default"]);
app.use("/api", restaurantRoute_1["default"]);
app.use("/api", dishRoute_1["default"]);
app.use("/api", cartRoute_1["default"]);
app.use("/api", orderRoute_1["default"]);
app.use("/api", cityRoute_1["default"]);
app.use("/api", addressRoute_1["default"]);
app.listen(port, function () {
    console.log("server listen on port ", port);
});
