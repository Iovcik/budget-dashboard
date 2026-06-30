import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { UserCredentialsSchema } from '@/entities/user';
import { getUserByEmail } from '@/entities/user/index.server';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';


const DUMMY_HASH = '$2b$10$CwTycUXWue0Thq9StjUM0uJ8/ngTMCLa5B8RuvxLTRFZH4J.W1v6m';

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const parsed = UserCredentialsSchema.safeParse(credentials);
                if (!parsed.success) return null

                const { email, password } = parsed.data;

                const user = await getUserByEmail(email);

                const hash = user?.password ?? DUMMY_HASH;
                const isValid = await bcrypt.compare(password, hash);

                if (!user || !isValid) return null;

                return { id: String(user.id), name: user.name, email: user.email }
            }
        })
    ],
});