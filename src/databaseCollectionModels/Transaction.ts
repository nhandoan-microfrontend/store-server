import {Schema, Document, Model, model} from 'mongoose'

export interface ITransaction {

}

export type TransactionDocument = ITransaction & Document;

export const TransactionSchema = new Schema({})

export const TransactionModel: Model<TransactionDocument> = model('Transaction', TransactionSchema)
