import {IProduct, ProductDocument, ProductModel} from "../databaseCollectionModels/ProductDataModels";
import {Query} from "mongoose";

export const createProduct = (product: IProduct): Promise<ProductDocument> => {
    const newProduct = new ProductModel(product);

    return newProduct.save();
}

export const getProducts = (): Query<ProductDocument[], ProductDocument> => {
    return ProductModel.find();
}

export const updateProduct = async (id: string, product: IProduct): Promise<ProductDocument> => {
    return ProductModel.findByIdAndUpdate(id, product, {
        new: true,
    });
}

export const getProductDetail = (id: string): Query<ProductDocument | null, ProductDocument> => {
    return ProductModel.findById(id);
}

export const deleteProductById = (id: string): Query<ProductDocument | null, ProductDocument> => {
    return ProductModel.findByIdAndDelete(id)
}
