import { NextResponse, type NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/shared/api/";
import { UserRegistrationSchema } from "../model/schema";
import { createUser, getUserByEmail } from "@/entities/user/index.server";

export const ApiRegister = async (req: NextRequest) => {
    try {
        const reqJson = await req.json();

        const isOk = UserRegistrationSchema.safeParse(reqJson);
        if (!isOk.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

        const { email, password } = isOk.data;

        const user = await getUserByEmail(email);

        if (user) return NextResponse.json({ error: "Email already in use" }, { status: 409 });

        const hashPassword = await bcrypt.hash(password, 10);
        await createUser({
            ...isOk.data,
            password: hashPassword
        });

        return NextResponse.json({ success: true }, { status: 201 })
    } catch (err) {
        console.log('error', err)
        return NextResponse.json({ error: "Something went wrong. Try again later." }, { status: 500 });
    }
}