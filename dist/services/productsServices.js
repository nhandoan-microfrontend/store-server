"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductById = exports.getProductDetail = exports.updateProduct = exports.getProducts = exports.createProduct = void 0;
const ProductDataModels_1 = require("../databaseCollectionModels/ProductDataModels");
const createProduct = (product) => {
    const newProduct = new ProductDataModels_1.ProductModel(product);
    return newProduct.save();
};
exports.createProduct = createProduct;
const getProducts = () => {
    return ProductDataModels_1.ProductModel.find();
};
exports.getProducts = getProducts;
const updateProduct = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    return ProductDataModels_1.ProductModel.findByIdAndUpdate(id, product, {
        new: true,
    });
});
exports.updateProduct = updateProduct;
const getProductDetail = (id) => {
    return ProductDataModels_1.ProductModel.findById(id);
};
exports.getProductDetail = getProductDetail;
const deleteProductById = (id) => {
    return ProductDataModels_1.ProductModel.findByIdAndDelete(id);
};
exports.deleteProductById = deleteProductById;
//# sourceMappingURL=productsServices.js.map