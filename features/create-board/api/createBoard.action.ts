"use server";

import { verifySession } from "@/features/session";
import { BoardCreateSchema } from "../model/schema";
import { CreateBoardState } from "../model/types";
import { createBoard as createBoardEntity } from "@/entities/board/index.server";
import { revalidatePath } from "next/cache";

export const createBoard = async (
    _prevState: CreateBoardState | null,
    formData: FormData,
): Promise<CreateBoardState> => {
    const { userId } = await verifySession();

    const parsed = BoardCreateSchema.safeParse({ name: formData.get("name") });

    if (!parsed.success) {
        return { error: parsed.error.issues[0]?.message ?? "Invalid data." };
    }

    await createBoardEntity(parsed.data.name, userId);

    revalidatePath("/dashboard");

    return { success: true };
};
