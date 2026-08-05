import { z } from "zod";

export const colorHexSchema = z
    .string().regex(/^#([0-9A-Fa-f]{3}){1,2}$/, {
        message: "Invalid hex color",
    });

export const amountSchema = z.number()
    .positive("Amount must be greater than 0.")
    .max(999999.99, "Amount must be at most 999,999.99.");