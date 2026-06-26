import { PrismaClient } from "@/lib/generated/prisma/client"
import { PrismaMariaDb } from "@prisma/adapter-mariadb"

const adapter = new PrismaMariaDb({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    ssl: {
        rejectUnauthorized: false
    },
    user: process.env.DB_USER,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PWD
})

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const db = globalForPrisma.prisma ?? new PrismaClient({
    adapter
})

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = db
}