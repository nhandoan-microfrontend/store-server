"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryById = exports.updateCategoryById = exports.getCategoryById = exports.createCategory = exports.getCategories = void 0;
const CategoryDataModels_1 = require("../databaseCollectionModels/CategoryDataModels");
const getCategories = () => {
    return CategoryDataModels_1.CategoryModel.find();
};
exports.getCategories = getCategories;
const createCategory = (category) => {
    const newCategory = new CategoryDataModels_1.CategoryModel(category);
    return newCategory.save();
};
exports.createCategory = createCategory;
const getCategoryById = (id) => {
    return CategoryDataModels_1.CategoryModel.findById(id);
};
exports.getCategoryById = getCategoryById;
const updateCategoryById = (id, category) => {
    return CategoryDataModels_1.CategoryModel.findByIdAndUpdate(id, category, {
        new: true,
    });
};
exports.updateCategoryById = updateCategoryById;
const deleteCategoryById = (id) => {
    return CategoryDataModels_1.CategoryModel.findByIdAndDelete(id);
};
exports.deleteCategoryById = deleteCategoryById;
//# sourceMappingURL=categoriesServices.js.map