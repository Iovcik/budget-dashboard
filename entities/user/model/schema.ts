import * as z from 'zod';

export const UserCredentialsSchema = z.object({
    email: z.email().trim().toLowerCase(),
    password: z.string().min(8).max(72)
});

export const UserRegistrationSchema = UserCredentialsSchema.extend({
    name: z.string().min(3).max(12)
})

export type TUserCredentials = z.infer<typeof UserCredentialsSchema>;
export type TUserRegistration = z.infer<typeof UserRegistrationSchema>;