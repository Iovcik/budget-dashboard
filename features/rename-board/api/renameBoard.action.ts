"use server";

import { verifySession } from "@/features/session";
import { getUserBoardRole, updateBoardName } from "@/entities/board/index.server";
import { revalidatePath } from "next/cache";
import * as z from "zod";
import { Prisma } from "@/shared/api/generated/prisma";

const RenameBoardSchema = z.object({
    name: z.string().trim().min(3, "Name must be at least 3 characters.").max(100, "Name must be at most 100 characters."),
});

export const renameBoard = async (boardId: number, name: string): Promise<IActionState> => {
    const { userId } = await verifySession();

    const parsed = RenameBoardSchema.safeParse({ name });

    if (!parsed.success) {
        return { error: parsed.error.issues[0]?.message ?? "Invalid name." };
    }

    const membership = await getUserBoardRole(boardId, userId);

    if (!membership || membership.role !== "OWNER") {
        return { error: "Forbidden" };
    }
    try {
        await updateBoardName(boardId, parsed.data.name);

    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
            return { error: 'Board already renamed.' };
        }
    }

    revalidatePath("/dashboard");

    return { success: true };
};
