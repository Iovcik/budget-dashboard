import "server-only";
import { db } from "@/shared/api";
import { IECreateMonthlyBudgetPayload, IEUpdateMonthlyBudgetPayload } from "../model/types";

export const getMonthlyBudgetsByYear = async (boardId: string | number, year: number) => await db.monthlyBudget.findMany({ where: { boardId: Number(boardId), year } });

export const getMonthlyBudgetByYearMonth = async (boardId: string | number, year: number, month: number) => await db.monthlyBudget.findFirst({ where: { boardId: Number(boardId), year, month } });

export const getMonthlyBudgetById = async (monthlyBudgetId: string | number) => await db.monthlyBudget.findUnique({ where: { id: Number(monthlyBudgetId) } });

export const createMonthlyBudget = async (data: IECreateMonthlyBudgetPayload) => await db.monthlyBudget.create({ data });

export const updateMonthlyBudget = async (data: IEUpdateMonthlyBudgetPayload) => await db.monthlyBudget.update({ where: { id: data.id }, data });

export const deleteMonthlyBudget = async (monthlyBudgetId: number | string) => await db.monthlyBudget.delete({ where: { id: Number(monthlyBudgetId) } });