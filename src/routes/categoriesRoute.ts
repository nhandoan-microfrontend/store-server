import {Router} from 'express';
import {
    getCategories,
    createCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
} from '../services/categoriesServices';
import {addCategoryProducts, getCategoryProducts, removeCategoryProducts} from "../services/categoryProductsServices";

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const categories = await getCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/', async (req, res, next) => {
    const categoryData = req.body;
    try {
        const createdCategory = await createCategory(categoryData);
        res.json(createdCategory);
    } catch (e) {
        res.status(500).send(e);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const targetCategory = await getCategoryById(req.params.id);
        res.json(targetCategory);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.put('/:id', async (req, res, next) => {
    const categoryData = req.body;
    try {
        const updatedCategory = await updateCategoryById(req.params.id, categoryData);
        res.json(updatedCategory);
    } catch (e) {
        res.status(500).send(e);
    }
})

router.get('/:id/products', async (req, res, next) => {
    try {
        const result = await getCategoryProducts(req.params.id);
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.put('/:id/products', async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const { productIds, isAdding } = req.body;
        const result = isAdding ? await addCategoryProducts(categoryId,productIds) : await removeCategoryProducts(categoryId, productIds);
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await deleteCategoryById(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
})

export default router;
