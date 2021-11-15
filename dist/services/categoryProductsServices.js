"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCategoryProducts = exports.addCategoryProducts = exports.getCategoryProducts = void 0;
const mongoose_1 = require("mongoose");
const CategoryProductDataModels_1 = require("../databaseCollectionModels/CategoryProductDataModels");
const getCategoryProducts = (categoryId) => {
    return CategoryProductDataModels_1.CategoryProductModel.find({
        categoryId: new mongoose_1.Types.ObjectId(categoryId)
    });
};
exports.getCategoryProducts = getCategoryProducts;
const addCategoryProducts = (categoryId, productIds) => {
    const categoryProducts = productIds.map((productId) => ({
        categoryId,
        productId,
    }));
    return CategoryProductDataModels_1.CategoryProductModel.insertMany(categoryProducts);
};
exports.addCategoryProducts = addCategoryProducts;
const removeCategoryProducts = (categoryId, productIds) => {
    return CategoryProductDataModels_1.CategoryProductModel.deleteMany({
        categoryId,
        productId: {
            '$in': productIds
        }
    });
};
exports.removeCategoryProducts = removeCategoryProducts;
//# sourceMappingURL=categoryProductsServices.js.map