"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../common/enums");
exports.ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    basePrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
}, {
    timestamps: true
});
exports.ProductModel = mongoose_1.model(enums_1.DATABASE_MODEL_NAME.Product, exports.ProductSchema);
//# sourceMappingURL=ProductDataModels.js.map