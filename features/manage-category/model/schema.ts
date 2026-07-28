import * as z from 'zod';
import { CategoryBaseEntitySchema } from '@/entities/category';

export const CategoryCreateSchema = CategoryBaseEntitySchema.extend({
    boardId: z.number()
})

export const CategoryEditSchema = CategoryBaseEntitySchema.extend({
    id: z.number(),
})