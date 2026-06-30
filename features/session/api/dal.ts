import "server-only";

import { cache } from 'react';
import { redirect } from 'next/navigation';
import { auth } from '../model/session';
import { getUserById } from "@/entities/user/index.server";

export const verifySession = cache(async () => {
    const session = await auth();

    if (!session?.user?.id) {
        redirect('/login');
    }

    return { isAuth: true, userId: session.user.id };
});

export const getUser = cache(async () => {
    const verifiedUser = await verifySession();

    const user = await getUserById(verifiedUser.userId);

    return user;
});