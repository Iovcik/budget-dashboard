import * as z from 'zod';

export const MonthlyBudgetAmount = z.object({
    amount: z.number().min(1, "Name must be at least 3 characters.").max(10, "Name must be at most 100 characters.")
});