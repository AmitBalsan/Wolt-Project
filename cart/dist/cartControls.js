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
exports.removeItem = exports.getAllDish = exports.addToCart = void 0;
var jwt_simple_1 = require("jwt-simple");
var cartModel_1 = require("./cartModel");
var dishModel_1 = require("../dish/dishModel");
var secret = process.env.JWT_SECRET;
exports.addToCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dishID, user, decoded, userId, dishDB, cart, cartItem, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                dishID = req.body.dishID;
                user = req.cookies["user"];
                decoded = jwt_simple_1["default"].decode(user, secret);
                userId = decoded.userId;
                return [4 /*yield*/, dishModel_1["default"].findById(dishID)];
            case 1:
                dishDB = _a.sent();
                if (!dishDB)
                    throw new Error("There is no Dish in the DB");
                return [4 /*yield*/, cartModel_1["default"].create({
                        dishName: dishDB.name,
                        price: dishDB.price,
                        resID: dishDB.resID,
                        sellerID: dishDB.userID,
                        dishID: dishDB._id,
                        userID: userId
                    })];
            case 2:
                cart = _a.sent();
                return [4 /*yield*/, cartModel_1["default"].find({ userID: userId })];
            case 3:
                cartItem = _a.sent();
                res.status(200).send({ cartItem: cartItem });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getAllDish = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, decoded, userId, itemInCart, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.cookies["user"];
                decoded = jwt_simple_1["default"].decode(user, secret);
                userId = decoded.userId;
                return [4 /*yield*/, cartModel_1["default"].find({ userID: userId })];
            case 1:
                itemInCart = _a.sent();
                res.status(200).send({ itemInCart: itemInCart });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.removeItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var itemID, user, decoded, userId, item, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                itemID = req.body.itemID;
                if (!itemID)
                    throw new Error("There is no ItemID in the list");
                user = req.cookies["user"];
                decoded = jwt_simple_1["default"].decode(user, secret);
                userId = decoded.userId;
                return [4 /*yield*/, cartModel_1["default"].findByIdAndRemove(itemID)];
            case 1:
                item = _a.sent();
                res.status(200).send({ item: item });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
