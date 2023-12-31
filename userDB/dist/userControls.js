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
exports.logout = exports.login = exports.createUser = exports.loginUser = void 0;
var jwt_simple_1 = require("jwt-simple");
var userModel_1 = require("./userModel");
var dotenv = require("dotenv");
dotenv.config();
var secret = process.env.JWT_SECRET;
// const secret: string = "fdkjdfjvbjfdbvkafkdhfxzcvzfd";
exports.loginUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, userDB, user, token, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body.userLogin, email = _a.email, password = _a.password;
                if (!email)
                    throw new Error("Email is missing");
                if (!password)
                    throw new Error("Password is missing");
                return [4 /*yield*/, userModel_1["default"].findOne({
                        email: email,
                        password: password
                    })];
            case 1:
                userDB = _b.sent();
                if (!userDB)
                    throw new Error("There is no user like that");
                user = {
                    firstName: userDB.firstName,
                    lastName: userDB.lastName,
                    userType: userDB.userType
                };
                token = jwt_simple_1["default"].encode({ userId: userDB._id, role: "public" }, secret);
                res.cookie("user", token, { maxAge: 50000000, httpOnly: true });
                res.status(201).send({ ok: true, user: user });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.log(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, phoneNumber, email, password, userType, existsUserDB, userDB, test, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                _a = req.body.user, firstName = _a.firstName, lastName = _a.lastName, phoneNumber = _a.phoneNumber, email = _a.email, password = _a.password, userType = _a.userType;
                if (!firstName)
                    throw new Error("There is no first name");
                if (!lastName)
                    throw new Error("There is no last name");
                if (!phoneNumber)
                    throw new Error("There is no phone Number");
                if (!email)
                    throw new Error("There is no email");
                if (!password)
                    throw new Error("There is no password");
                if (!userType)
                    throw new Error("There is no user type");
                return [4 /*yield*/, userModel_1["default"].findOne({ email: email })];
            case 1:
                existsUserDB = _b.sent();
                if (!!existsUserDB) return [3 /*break*/, 4];
                return [4 /*yield*/, userModel_1["default"].create({
                        firstName: firstName,
                        lastName: lastName,
                        phoneNumber: phoneNumber,
                        email: email,
                        password: password,
                        userType: userType
                    })];
            case 2:
                userDB = _b.sent();
                return [4 /*yield*/, userModel_1["default"].find({})];
            case 3:
                test = _b.sent();
                res.status(200).send({ send: "Registration Success", id: userDB._id });
                return [3 /*break*/, 5];
            case 4: throw new Error("This user is already exists");
            case 5: return [3 /*break*/, 7];
            case 6:
                error_2 = _b.sent();
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, decoded, userId, userDB, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.cookies["user"];
                decoded = jwt_simple_1["default"].decode(user, secret);
                userId = decoded.userId;
                if (!userId)
                    throw new Error("Please Login");
                return [4 /*yield*/, userModel_1["default"].findById(userId)];
            case 1:
                userDB = _a.sent();
                if (!userDB)
                    throw new Error("There is no User");
                res
                    .status(201)
                    .send({ message: "ok", login: true, userType: userDB.userType });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).send({ error: error_3.message, login: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.logout = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            res.clearCookie("user");
            res.status(200).send({ logout: true });
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
