import {Schema, Document, Model, model} from 'mongoose'

export interface IUser {
    email: string,
    password: string
}

export type UserDocument = IUser & Document;

export const UserSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
});

export const UserModel: Model<UserDocument> = model('User', UserSchema);
