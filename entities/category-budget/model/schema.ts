import * as z from 'zod';
import { amountSchema } from '@/shared/model/schema';
export const CategoryBudgetAmount = z.object({ amount: amountSchema });