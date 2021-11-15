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
const express_1 = require("express");
const productsServices_1 = require("../services/productsServices");
const router = express_1.Router();
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProducts = yield productsServices_1.getProducts();
        res.json(allProducts);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    try {
        const createdProduct = yield productsServices_1.createProduct(productData);
        res.json(createdProduct);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const id = req.params.id;
    try {
        const updatedProduct = yield productsServices_1.updateProduct(id, productData);
        res.json(updatedProduct);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const targetProduct = yield productsServices_1.getProductDetail(id);
        res.json(targetProduct);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield productsServices_1.deleteProductById(id);
        res.status(204).send();
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
exports.default = router;
//# sourceMappingURL=productsRoute.js.map