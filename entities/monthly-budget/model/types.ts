import { MonthlyBudget } from "@/shared/api/generated/prisma";

export interface IECreateMonthlyBudgetPayload extends Omit<MonthlyBudget, "id" | "createdAd" | "updatedAt" | "amount"> {
    amount: number;
}

export interface IEUpdateMonthlyBudgetPayload extends Pick<MonthlyBudget, "id"> {
    amount: number;
}