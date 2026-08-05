import { CategoryBudget } from "@/shared/api/generated/prisma";

export type TECreateCategoryBudget = Omit<CategoryBudget, "id" | "amount" | "createdAt"> & { amount: number };

export type TEUpdateCategoryBudget = Pick<CategoryBudget, "id"> & { amount: number };