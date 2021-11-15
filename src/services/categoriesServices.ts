import {Query} from 'mongoose'
import {CategoryDocument, CategoryModel, ICategory} from "../databaseCollectionModels/CategoryDataModels";

export const getCategories = (): Query<CategoryDocument[], CategoryDocument> => {
    return CategoryModel.find();
}

export const createCategory = (category: ICategory): Promise<CategoryDocument> => {
    const newCategory = new CategoryModel(category);
    return newCategory.save();
}

export const getCategoryById = (id: string): Query<CategoryDocument, CategoryDocument> => {
    return CategoryModel.findById(id);
}

export const updateCategoryById = (id: string, category: ICategory): Query<CategoryDocument, CategoryDocument> => {
    return CategoryModel.findByIdAndUpdate(id, category, {
        new: true,
    });
}

export const deleteCategoryById = (id: string): Query<CategoryDocument, CategoryDocument> => {
    return CategoryModel.findByIdAndDelete(id);
}
