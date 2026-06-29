import { NextResponse } from 'next/server';
import { auth } from '@/features/auth/index.server';

const protectedRoutes = ['/'];
const publicRoutes = ['/login', '/register'];

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth?.user;

    const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    console.log(nextUrl.pathname, isProtectedRoute, isLoggedIn)
    if (isProtectedRoute && !isLoggedIn) {
        return NextResponse.redirect(new URL('/login', nextUrl));
    }

    if (isPublicRoute && isLoggedIn) {
        return NextResponse.redirect(new URL('/', nextUrl));
    }
});

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
