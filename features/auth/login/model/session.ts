import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { db } from "@/shared/api/db";
import { UserCredentialsSchema } from './schema';

export const { handlers, auth, signIn, signOut } = NextAuth({
    session: { strategy: "jwt" },
    pages: { signIn: "/login" },
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
                const user = await db.user.findUnique({ where: { email } });
                if (!user) return null;

                const isOkCrypt = await bcrypt.compare(password, user.password);

                if (!isOkCrypt) return null;

                return { id: String(user.id), name: user.name, email: user.email }
            }
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) token.id = user.id;

            return token;
        },
        session: async ({ session, token }) => {
            if (token) session.user.id = token.id as string;

            return session;
        }
    }
})