"use server";

import { verifySession } from "@/features/session";
import { ManageCategoryState, TCategoryEditPayload } from "../model/types";
import { updateCategory } from "@/entities/category/index.server";
import { CategoryEditSchema } from "../model/schema";

export const editCategory = async (data: TCategoryEditPayload): Promise<ManageCategoryState> => {
    await verifySession();

    const parsed = CategoryEditSchema.safeParse(data);

    if (!parsed.success) {
        return { error: parsed.error.issues[0]?.message ?? "Invalid data." };
    }

    await updateCategory(data);

    return { success: true };
};
