"use server";

import { verifySession } from "@/features/session";
import { getUserBoardRole, deleteBoard as deleteBoardEntity } from "@/entities/board/index.server";
import { revalidatePath } from "next/cache";
import { Prisma } from "@/shared/api/generated/prisma";

export const deleteBoard = async (boardId: number): Promise<IActionState> => {
    const { userId } = await verifySession();

    const membership = await getUserBoardRole(boardId, userId);

    if (!membership || membership.role !== "OWNER") {
        return { error: "Forbidden" };
    }

    try {
        await deleteBoardEntity(boardId);

    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
            return { error: 'Board already renamed.' };
        }
    }



    revalidatePath("/dashboard");

    return { success: true };
};
