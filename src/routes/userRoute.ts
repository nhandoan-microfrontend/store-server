import {Router} from "express";
import {createUser, getAllUsers, userLogin} from "../services/userServices";

const router = Router();
router.get('/', async (req, res, next) => {
    const result = await getAllUsers()
    res.send(result)
});

router.post('/', async (req, res, next) => {
    const result = await createUser(req.body);
    res.send(result);
});

router.post('/login', async (req, res, next) => {
    try {
        const result = await userLogin(req.body);
        res.send(result);
    } catch (error) {
        next(error);
    }
})

export default router;
