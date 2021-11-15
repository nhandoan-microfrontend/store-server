"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryProductModel = exports.CategoryProductSchema = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../common/enums");
exports.CategoryProductSchema = new mongoose_1.Schema({
    categoryId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: enums_1.DATABASE_MODEL_NAME.Category,
    },
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: enums_1.DATABASE_MODEL_NAME.Product,
    },
});
exports.CategoryProductModel = mongoose_1.model(enums_1.DATABASE_MODEL_NAME.CategoryProduct, exports.CategoryProductSchema);
//# sourceMappingURL=CategoryProductDataModels.js.map