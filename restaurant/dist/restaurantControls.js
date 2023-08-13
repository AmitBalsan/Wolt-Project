"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getRestaurantAllList = exports.restaurant = exports.handleDelete = exports.getRestaurant = exports.createRestaurant = void 0;
var jwt_simple_1 = require("jwt-simple");
var restaurantModel_1 = require("./restaurantModel");
var cityModel_1 = require("../city/cityModel");
var dishModel_1 = require("../dish/dishModel");
var secret = "fdkjdfjvbjfdbvkafkdhfxzcvzfd";
exports.createRestaurant = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, image, phoneNumber, bmNumber, city, street, notes, minTime, maxTime, user, decoded, userId, cityModel, restaurantDB, restaurantList, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body.res, name = _a.name, image = _a.image, phoneNumber = _a.phoneNumber, bmNumber = _a.bmNumber, city = _a.city, street = _a.street, notes = _a.notes, minTime = _a.minTime, maxTime = _a.maxTime;
                if (!name)
                    throw new Error("There is no restaurant Name");
                if (!image)
                    throw new Error("There is no restaurant image");
                if (!phoneNumber)
                    throw new Error("There is no phoneNumber");
                if (!bmNumber)
                    throw new Error("There is no bmNumber");
                if (!city)
                    throw new Error("There is no city Name");
                if (!street)
                    throw new Error("There is no street Name");
                user = req.cookies["user"];
                decoded = jwt_simple_1["default"].decode(user, secret);
                userId = decoded.userId;
                return [4 /*yield*/, cityModel_1["default"].findById("64d15f9720ce9c80c243e2ea")];
            case 1:
                cityModel = _b.sent();
                return [4 /*yield*/, restaurantModel_1["default"].create({
                        name: name,
                        image: image,
                        phone: phoneNumber,
                        bmNumber: bmNumber,
                        street: street,
                        userID: userId,
                        cityID: cityModel,
                        notes: notes,
                        minTime: minTime,
                        maxTime: maxTime
                    })];
            case 2:
                restaurantDB = _b.sent();
                return [4 /*yield*/, restaurantModel_1["default"].find({ userID: userId })];
            case 3:
                restaurantList = _b.sent();
                res.status(200).send({ restaurantList: restaurantList });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getRestaurant = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, decoded, userId, restaurantList, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.cookies["user"];
                decoded = jwt_simple_1["default"].decode(user, secret);
                userId = decoded.userId;
                return [4 /*yield*/, restaurantModel_1["default"].find({ userID: userId })];
            case 1:
                restaurantList = _a.sent();
                if (!restaurantList)
                    throw new Error("There is no Restaurant");
                res.status(201).send({ message: "ok", restaurantList: restaurantList });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.handleDelete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurantID, deleteDish, deleteRestaurant, user, decoded, userId, restaurantList, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                restaurantID = req.body.restaurantID;
                if (!restaurantID)
                    throw new Error("There is no restaurant ID");
                return [4 /*yield*/, dishModel_1["default"].deleteMany({ resID: restaurantID })];
            case 1:
                deleteDish = _a.sent();
                return [4 /*yield*/, restaurantModel_1["default"].findByIdAndRemove(restaurantID)];
            case 2:
                deleteRestaurant = _a.sent();
                user = req.cookies["user"];
                decoded = jwt_simple_1["default"].decode(user, secret);
                userId = decoded.userId;
                return [4 /*yield*/, restaurantModel_1["default"].find({ userID: userId })];
            case 3:
                restaurantList = _a.sent();
                if (!restaurantList)
                    throw new Error("There is no Restaurant");
                res.status(201).send({ message: "ok", restaurantList: restaurantList });
                return [3 /*break*/, 5];
            case 4:
                error_3 = _a.sent();
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.restaurant = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var resID, restaurant_1, resDetails, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                resID = req.body.restaurantSelect.resID;
                if (!resID)
                    throw new Error("There is no Res ID");
                return [4 /*yield*/, restaurantModel_1["default"].findById(resID)];
            case 1:
                restaurant_1 = _a.sent();
                if (!restaurant_1)
                    throw new Error("There is no res for the ID");
                resDetails = {
                    name: restaurant_1.name,
                    image: restaurant_1.image,
                    phone: restaurant_1.phone,
                    street: restaurant_1.street
                };
                res.status(200).send({ resDetails: resDetails, resID: resID });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(500).send({ error: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getRestaurantAllList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurantList, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, restaurantModel_1["default"].find({})];
            case 1:
                restaurantList = _a.sent();
                if (!restaurantList)
                    throw new Error("There is no restaurant");
                res.status(200).send(restaurantList);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(500).send({ error: error_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
