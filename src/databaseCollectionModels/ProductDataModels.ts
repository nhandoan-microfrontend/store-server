import {Schema, model, Model, Document} from 'mongoose';
import {DATABASE_MODEL_NAME} from "../common/enums";

export interface IProduct{
    name: string,
    image: string,
    description: string,
    basePrice: string,
    quantity: number,
}

export type ProductDocument = IProduct & Document;

export const ProductSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    basePrice: {type: Number, required: true},
    quantity: {type: Number, required: true},
}, {
    timestamps: true
});

export const ProductModel: Model<ProductDocument> = model(DATABASE_MODEL_NAME.Product, ProductSchema);
