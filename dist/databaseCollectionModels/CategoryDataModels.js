"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = exports.CategorySchema = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../common/enums");
exports.CategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true }
});
exports.CategoryModel = mongoose_1.model(enums_1.DATABASE_MODEL_NAME.Category, exports.CategorySchema);
//# sourceMappingURL=CategoryDataModels.js.map