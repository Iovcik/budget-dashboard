"use server";

import { verifySession } from "@/features/session";
import { getUserBoardRole, deleteBoard as deleteBoardEntity } from "@/entities/board/index.server";
import { revalidatePath } from "next/cache";

export interface DeleteBoardState {
    error?: string;
    success?: boolean;
}

export const deleteBoard = async (boardId: number): Promise<DeleteBoardState> => {
    const { userId } = await verifySession();

    const membership = await getUserBoardRole(boardId, userId);

    if (!membership || membership.role !== "OWNER") {
        return { error: "Forbidden" };
    }

    await deleteBoardEntity(boardId);

    revalidatePath("/dashboard");

    return { success: true };
};
