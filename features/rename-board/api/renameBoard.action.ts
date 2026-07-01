"use server";

import { verifySession } from "@/features/session";
import { getUserBoardRole, updateBoardName } from "@/entities/board/index.server";
import { revalidatePath } from "next/cache";
import * as z from "zod";

const RenameBoardSchema = z.object({
    name: z.string().trim().min(3, "Name must be at least 3 characters.").max(100, "Name must be at most 100 characters."),
});

export interface RenameBoardState {
    error?: string;
    success?: boolean;
}

export const renameBoard = async (boardId: number, name: string): Promise<RenameBoardState> => {
    const { userId } = await verifySession();

    const parsed = RenameBoardSchema.safeParse({ name });

    if (!parsed.success) {
        return { error: parsed.error.issues[0]?.message ?? "Invalid name." };
    }

    const membership = await getUserBoardRole(boardId, userId);

    if (!membership || membership.role !== "OWNER") {
        return { error: "Forbidden" };
    }

    await updateBoardName(boardId, parsed.data.name);

    revalidatePath("/dashboard");

    return { success: true };
};
