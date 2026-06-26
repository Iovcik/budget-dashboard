import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.email().trim().toLowerCase(),
    password: z.string().max(12).min(4)
})

export const RegistrationSchema = LoginSchema.extend({
    name: z.string().min(3).max(12)
})

export type TLoginSchema = z.infer<typeof LoginSchema>;
export type TRegisterSchema = z.infer<typeof RegistrationSchema>;