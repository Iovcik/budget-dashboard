import { NextResponse, type NextRequest } from "next/server";
import { RegistrationSchema } from "@/lib/validations/auth";
import bcrypt from "bcryptjs";
import { db } from "@/shared/api/";

export const ApiRegister = async (req: NextRequest) => {
    try {
        const reqJson = await req.json();

        const isOk = RegistrationSchema.safeParse(reqJson);
        if (!isOk.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

        const { email, password } = isOk.data;

        const user = await db.user.findUnique({ where: { email } });

        if (user) return NextResponse.json({ error: "Email already in use" }, { status: 409 });

        const hashPassword = await bcrypt.hash(password, 10);
        await db.user.create({
            data: {
                ...isOk.data,
                password: hashPassword
            }
        });

        return NextResponse.json({ success: true }, { status: 201 })
    } catch (err) {
        console.log('error', err)
        return NextResponse.json({ error: "Something went wrong. Try again later." }, { status: 500 });
    }
}