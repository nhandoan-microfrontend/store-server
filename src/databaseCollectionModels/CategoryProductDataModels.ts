import {ObjectId, Schema, Document, Model, model, Types} from 'mongoose'
import {DATABASE_MODEL_NAME} from "../common/enums";

export interface ICategoryProduct {
    categoryId: Types.ObjectId,
    productId: Types.ObjectId,
}

export type CategoryProductDocument = ICategoryProduct & Document;

export const CategoryProductSchema = new Schema({
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: DATABASE_MODEL_NAME.Category,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: DATABASE_MODEL_NAME.Product,
    },
})

export const CategoryProductModel: Model<CategoryProductDocument> = model(DATABASE_MODEL_NAME.CategoryProduct, CategoryProductSchema)
