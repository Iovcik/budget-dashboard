import { NextResponse, type NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { UserRegistrationSchema } from "@/entities/user";
import { createUser, getUserByEmail } from "@/entities/user/index.server";
import { Prisma } from '@/shared/api/generated/prisma';

export const ApiRegister = async (req: NextRequest) => {
    try {
        const reqJson = await req.json();

        const parsed = UserRegistrationSchema.safeParse(reqJson);
        if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

        const { email, password } = parsed.data;

        const user = await getUserByEmail(email);

        if (user) return NextResponse.json({ error: "Email already in use" }, { status: 409 });

        const hashPassword = await bcrypt.hash(password, 10);
        await createUser({
            ...parsed.data,
            password: hashPassword
        });

        return NextResponse.json({ success: true }, { status: 201 })
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
            return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
        }
        return NextResponse.json({ error: "Something went wrong. Try again later." }, { status: 500 });
    }
}