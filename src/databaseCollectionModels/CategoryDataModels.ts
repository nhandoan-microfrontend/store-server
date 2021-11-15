import {Document, Schema, model, Model} from 'mongoose'
import {DATABASE_MODEL_NAME} from "../common/enums";

export interface ICategory {
    name: string;
}

export type CategoryDocument = ICategory & Document;

export const CategorySchema = new Schema({
    name: {type: String, required: true}
})

export const CategoryModel: Model<CategoryDocument> = model(DATABASE_MODEL_NAME.Category, CategorySchema);
