import { auth } from '@/features/session';

const authRoutes = ["/login", "/register"];

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (!isLoggedIn && !isAuthRoute) {
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