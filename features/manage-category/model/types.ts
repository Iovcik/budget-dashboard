import * as z from "zod";
import { CategoryCreateSchema, CategoryEditSchema } from "./schema";

export interface ManageCategoryState {
    error?: string;
    success?: boolean;
}

export type TCategoryCreatePayload = z.infer<typeof CategoryCreateSchema>
export type TCategoryEditPayload = z.infer<typeof CategoryEditSchema>

export function isEditCategory(data: TCategoryCreatePayload | TCategoryEditPayload): data is TCategoryEditPayload {
    return "id" in data && typeof data.id === "number" && data.id > 0
} 