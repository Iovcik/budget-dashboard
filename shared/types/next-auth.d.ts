import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `auth()`, `useSession`, etc. We add `id` to the user so
   * server components and API routes can scope queries by `session.user.id`.
   */
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Shape of the JWT we populate in the `jwt` callback. */
  interface JWT {
    id: string;
  }
}
