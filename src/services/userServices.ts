import {IUser, UserDocument, UserModel} from "../databaseCollectionModels/UserData";
import {Query} from "mongoose";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import {ErrorModel} from "../helpers/errorHelpers";

const SALT_ROUND = 10

const hashPassword = (password: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        bcrypt.hash(password, SALT_ROUND, (err, encrypted) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(encrypted);
        })
    })
}

export const getAllUsers = (): Query<UserDocument[], UserDocument> => {
    return UserModel.find();
}

export const createUser = async (user: IUser): Promise<UserDocument> => {
    const hashedPassword = await hashPassword(user.password);
    const newUser = new UserModel({
        ...user,
        password: hashedPassword
    })
    return newUser.save();
}

export const userLogin = async (user: IUser): Promise<{token: string}> => {
    const targetUser = await UserModel.findOne({email: user.email});
    if (!targetUser) {
        throw new ErrorModel(401, 'Wrong email or password');
    }

    const isCorrectPassword = await bcrypt.compare(user.password, targetUser.password);
    if (!isCorrectPassword) {
        throw new ErrorModel(401, 'Wrong email or password')
    }

    return {
        token: jwt.sign({email: user.email}, process.env.JWT_KEY)
    }
}
