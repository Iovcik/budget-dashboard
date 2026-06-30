import { auth } from '@/features/session';

const publicRoutes = ["/login", "/register"];
const authRoutes = ["/login"];

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isPublic = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (!isLoggedIn && !isPublic) {
        const loginUrl = new URL("/login", nextUrl);
        loginUrl.searchParams.set("callbackUrl", nextUrl.href);
        return Response.redirect(loginUrl);
    }

    if (isLoggedIn && isAuthRoute) {
        return Response.redirect(new URL("/", nextUrl));
    }

    return;
});

export const config = {
    matcher: [
        "/((?!api/auth|_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};