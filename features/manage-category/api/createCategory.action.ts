"use server";

import { verifySession } from "@/features/session";
import { createCategory as createCategoryEntity } from "@/entities/category/index.server";
import { revalidatePath } from "next/cache";
import { getUserBoardRole } from "@/entities/board/index.server";
import { ManageCategoryState, TCategoryCreatePayload } from "../model/types";
import { CategoryCreateSchema } from "../model/schema";

export const createCategory = async (data: TCategoryCreatePayload): Promise<ManageCategoryState> => {
    const user = await verifySession();


    const parsed = CategoryCreateSchema.safeParse(data);

    if (!parsed.success) {
        return { error: parsed.error.issues[0]?.message ?? "Invalid data." };
    }

    const membership = await getUserBoardRole(parsed.data.boardId, user.userId);

    if (!membership) {
        return {
            error: "Forbidden."
        }
    }

    await createCategoryEntity(parsed.data);

    revalidatePath("/");
    return { success: true };
};