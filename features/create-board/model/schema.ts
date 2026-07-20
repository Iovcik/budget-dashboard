import * as z from 'zod';

export const BoardCreateSchema = z.object({
    name: z.string().trim().min(3, "Name must be at least 3 characters.").max(100, "Name must be at most 100 characters."),
});