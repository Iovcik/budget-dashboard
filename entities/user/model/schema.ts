import * as z from 'zod';

export const UserCredentialsSchema = z.object({
    email: z.email().trim().toLowerCase(),
    password: z.string().max(12).min(4)
});

export const UserRegistrationSchema = UserCredentialsSchema.extend({
    name: z.string().min(3).max(12)
})

export type TUserCredentials = z.infer<typeof UserCredentialsSchema>;
export type TUserRegistration = z.infer<typeof UserRegistrationSchema>;