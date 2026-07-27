"use server";

import { verifySession } from "@/features/session";
import { CategoryCreateSchema } from "../model/schema";
import { CreateCategoryState } from "../model/types";
import { createCategory as createCategoryEntity } from "@/entities/category/index.server";

export const createCategory = async (
    _prevState: CreateCategoryState | null,
    formData: FormData,
): Promise<CreateCategoryState> => {
    await verifySession();

    const parsed = CategoryCreateSchema.safeParse({ name: formData.get("name"), color: formData.get("color"), boardId: Number(formData.get("boardId")) });

    if (!parsed.success) {
        return { error: parsed.error.issues[0]?.message ?? "Invalid data." };
    }

    await createCategoryEntity(parsed.data);

    return { success: true };
};
