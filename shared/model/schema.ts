import { z } from "zod";

export const colorHexSchema = z
    .string().regex(/^#([0-9A-Fa-f]{3}){1,2}$/, {
        message: "Invalid hex color",
    });