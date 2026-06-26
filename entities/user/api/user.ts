import { db } from "@/shared/api/db";
import { User } from "@/lib/generated/prisma";
import { TUserCredentials, TUserRegistration } from "../model/schema";
import bcrypt from "bcryptjs";

export const getUserByEmail = async (email: string): Promise<User | null> => {
    try {
        const user = await db.user.findUnique({ where: { email } });

        if (!user) return null;

        return user;
    } catch (error) {
        console.error('error on create user', error)
        throw error;
    }
}


export const createUser = async (user: TUserRegistration) => {
    try {
        const cratedUser = await db.user.create({
            data: user
        });

        return cratedUser;
    } catch (error) {
        console.error('error on create user', error)
        throw error;
    }
}

export const verifyPassword = async ({ email, password }: TUserCredentials): Promise<boolean> => {
    try {
        const user = await db.user.findUnique({
            where: { email }, select: {
                password: true
            }
        });
        if (!user) return false;
        const isOkCrypt = await bcrypt.compare(password, user.password);

        if (!isOkCrypt) return false;

        return true
    } catch (error) {
        console.error('error on create user', error)
        throw error;
    }
}