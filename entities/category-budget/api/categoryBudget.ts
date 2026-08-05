import "server-only";
import { db } from "@/shared/api";
import { CategoryBudget } from "@/shared/api/generated/prisma";
import { TECreateCategoryBudget, TEUpdateCategoryBudget } from "../model/types";

export const getCategoryBudgetsByBoardAndMonth = async ({ boardId, month, year }: Pick<CategoryBudget, "boardId" | "month" | "year">) => await db.categoryBudget.findMany({
    where: { boardId: boardId, month, year }, include: {
        category: true,
    }
});

export const getCategoryBudgetById = async (categoryBudgetId: number | string) => await db.categoryBudget.findUnique({ where: { id: Number(categoryBudgetId) } });

export const createCategoryBudget = async (data: TECreateCategoryBudget) => await db.categoryBudget.create({ data });

export const updateCategoryBudget = async (data: TEUpdateCategoryBudget) => await db.categoryBudget.update({ where: { id: data.id }, data: { amount: data.amount } });

export const deleteCategoryBudget = async (categoryBudgetId: number | string) => await db.categoryBudget.delete({ where: { id: Number(categoryBudgetId) } });