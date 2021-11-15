"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModel = exports.TransactionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TransactionSchema = new mongoose_1.Schema({});
exports.TransactionModel = mongoose_1.model('Transaction', exports.TransactionSchema);
//# sourceMappingURL=Transaction.js.map