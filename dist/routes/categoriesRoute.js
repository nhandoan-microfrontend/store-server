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
const categoriesServices_1 = require("../services/categoriesServices");
const categoryProductsServices_1 = require("../services/categoryProductsServices");
const router = express_1.Router();
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield categoriesServices_1.getCategories();
        res.json(categories);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryData = req.body;
    try {
        const createdCategory = yield categoriesServices_1.createCategory(categoryData);
        res.json(createdCategory);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const targetCategory = yield categoriesServices_1.getCategoryById(req.params.id);
        res.json(targetCategory);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
router.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryData = req.body;
    try {
        const updatedCategory = yield categoriesServices_1.updateCategoryById(req.params.id, categoryData);
        res.json(updatedCategory);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.get('/:id/products', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield categoryProductsServices_1.getCategoryProducts(req.params.id);
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}));
router.put('/:id/products', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryId = req.params.id;
        const { productIds, isAdding } = req.body;
        const result = isAdding ? yield categoryProductsServices_1.addCategoryProducts(categoryId, productIds) : yield categoryProductsServices_1.removeCategoryProducts(categoryId, productIds);
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}));
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield categoriesServices_1.deleteCategoryById(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
exports.default = router;
//# sourceMappingURL=categoriesRoute.js.map