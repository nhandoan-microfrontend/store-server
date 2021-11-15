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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.createUser = exports.getAllUsers = void 0;
const UserData_1 = require("../databaseCollectionModels/UserData");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorHelpers_1 = require("../helpers/errorHelpers");
const SALT_ROUND = 10;
const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt_1.default.hash(password, SALT_ROUND, (err, encrypted) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(encrypted);
        });
    });
};
const getAllUsers = () => {
    return UserData_1.UserModel.find();
};
exports.getAllUsers = getAllUsers;
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield hashPassword(user.password);
    const newUser = new UserData_1.UserModel(Object.assign(Object.assign({}, user), { password: hashedPassword }));
    return newUser.save();
});
exports.createUser = createUser;
const userLogin = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const targetUser = yield UserData_1.UserModel.findOne({ email: user.email });
    if (!targetUser) {
        throw new errorHelpers_1.ErrorModel(401, 'Wrong email or password');
    }
    const isCorrectPassword = yield bcrypt_1.default.compare(user.password, targetUser.password);
    if (!isCorrectPassword) {
        throw new errorHelpers_1.ErrorModel(401, 'Wrong email or password');
    }
    return {
        token: jsonwebtoken_1.default.sign({ email: user.email }, process.env.JWT_KEY)
    };
});
exports.userLogin = userLogin;
//# sourceMappingURL=userServices.js.map