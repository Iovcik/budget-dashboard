import * as z from 'zod';
import { amountSchema } from '@/shared/model/schema';

export const MonthlyBudgetAmount = z.object({
    amount: amountSchema
});