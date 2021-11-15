"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsRoute_1 = __importDefault(require("./productsRoute"));
const categoriesRoute_1 = __importDefault(require("./categoriesRoute"));
const userRoute_1 = __importDefault(require("./userRoute"));
const router = express_1.Router();
router.use('/products', productsRoute_1.default);
router.use('/categories', categoriesRoute_1.default);
router.use('/users', userRoute_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map