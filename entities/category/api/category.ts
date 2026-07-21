import "server-only";
import { db } from "@/shared/api";
import { Category } from "@/shared/api/generated/prisma";

export const getCategoriesByBoardId = async (boardId: string | number) => await db.category.findMany({ where: { boardId: Number(boardId) } });

export const getCategoryById = async (categoryId: number) => await db.category.findUnique({ where: { id: categoryId } });

export const createCategory = async (data: Category) => await db.category.create({ data });

export const updateCategory = async (data: Omit<Category, "boardId">) => await db.category.update({ where: { id: data.id }, data });

export const deleteCategory = async (categoryId: number | string) => await db.category.delete({ where: { id: Number(categoryId) } });