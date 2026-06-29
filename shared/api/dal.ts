import "server-only";


import { cache } from 'react';
import { redirect } from 'next/navigation';
import { auth } from '@/features/auth/index.server';
import { db } from "./db";

const verifySession = cache(async () => {
    const session = await auth();

    if (!session?.user?.id) {
        redirect('/login');
    }

    return { isAuth: true, userId: session.user.id };
});

export const getUser = cache(async (email: string) => {
    const verifiedUser = await verifySession();

    const user = await db.user.findUnique({
        where: { id: Number(verifiedUser.userId) }, select: {
            id: true,
            email: true,
            name: true
        }
    });
});