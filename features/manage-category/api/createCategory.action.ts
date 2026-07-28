"use server";

import { verifySession } from "@/features/session";
import { CategoryCreateSchema } from "../model/schema";
import { ManageCategoryState, TCategoryCreatePayload } from "../model/types";
import { createCategory as createCategoryEntity } from "@/entities/category/index.server";
import { revalidatePath } from "next/cache";

export const createCategory = async (data: TCategoryCreatePayload): Promise<ManageCategoryState> => {
    await verifySession();

    const parsed = CategoryCreateSchema.safeParse(data);

    if (!parsed.success) {
        return { error: parsed.error.issues[0]?.message ?? "Invalid data." };
    }

    await createCategoryEntity(parsed.data);

    revalidatePath("/");

    return { success: true };
};
