import "server-only";

import { db } from "@/shared/api/db";
import { User } from "@/shared/api/generated/prisma";
import { TUserRegistration } from "../model/schema";

type CreateUserInput = Omit<TUserRegistration, 'password'> & { password: string };

export const getUserByEmail = async (email: string): Promise<User | null> => await db.user.findUnique({ where: { email } });

export const getUserById = async (id: string): Promise<Omit<User, "password"> | null> => await db.user.findUnique({ where: { id: Number(id) }, omit: { password: true } });

export const createUser = async (user: CreateUserInput) => {
    try {
        const createdUser = await db.user.create({
            data: user
        });

        return createdUser;
    } catch (error) {
        console.error('error on create user', error)
        throw error;
    }
}