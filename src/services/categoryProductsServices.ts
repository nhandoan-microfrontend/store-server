import { Types } from 'mongoose'
import {CategoryProductModel} from '../databaseCollectionModels/CategoryProductDataModels'

export const getCategoryProducts = (categoryId: string) => {
    return CategoryProductModel.find({
        categoryId: new Types.ObjectId(categoryId)
    })
}

export const addCategoryProducts = (categoryId: string, productIds: string[]) => {
    const categoryProducts = productIds.map((productId) => ({
        categoryId,
        productId,
    }))

    return CategoryProductModel.insertMany(categoryProducts);
}

export const removeCategoryProducts = (categoryId: string, productIds: string[]) => {
    return CategoryProductModel.deleteMany({
        categoryId,
        productId: {
            '$in': productIds
        }
    })
}
