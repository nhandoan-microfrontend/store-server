"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res, next) => {
    try {
        res.json(req.params);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = router;
//# sourceMappingURL=categoryProductRoute.js.map