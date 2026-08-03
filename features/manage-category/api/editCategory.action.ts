"use server";

import { verifySession } from "@/features/session";
import { ManageCategoryState, TCategoryEditPayload } from "../model/types";
import { updateCategory } from "@/entities/category/index.server";
import { CategoryEditSchema } from "../model/schema";
import { getUserBoardRole } from "@/entities/board/index.server";

export const editCategory = async (data: TCategoryEditPayload): Promise<ManageCategoryState> => {
    const user = await verifySession();

    const parsed = CategoryEditSchema.safeParse(data);

    if (!parsed.success) {
        return { error: parsed.error.issues[0]?.message ?? "Invalid data." };
    }

    const membership = await getUserBoardRole(parsed.data.boardId, user.userId);

    if (!membership) {
        return {
            error: "Forbidden."
        }
    }

    await updateCategory(data);

    return { success: true };
};