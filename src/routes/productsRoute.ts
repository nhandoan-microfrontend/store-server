import { Router } from 'express';
import {
    createProduct,
    deleteProductById,
    getProductDetail,
    getProducts,
    updateProduct
} from "../services/productsServices";

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const allProducts = await getProducts();
        res.json(allProducts);
    }catch (e) {
        res.status(500).send(e);
    }
});

router.post('/', async (req, res) => {
    const productData = req.body;
    try {
        const createdProduct = await createProduct(productData);
        res.json(createdProduct);
    }catch (e) {
        res.status(500).send(e);
    }
})

router.put('/:id', async (req, res) => {
    const productData = req.body;
    const id = req.params.id;
    try {
        const updatedProduct = await updateProduct(id, productData);
        res.json(updatedProduct);
    }catch (e) {
        res.status(500).send(e);
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const targetProduct = await getProductDetail(id);
        res.json(targetProduct);
    }catch (e) {
        res.status(500).send(e);
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await deleteProductById(id);
        res.status(204).send();
    }catch (e) {
        res.status(500).send(e);
    }
});

export default router;
