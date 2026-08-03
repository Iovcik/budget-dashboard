export const normalizeSpaces = (value: string): string => {
    return value
        .replace(/\s+/g, " ")
        .trimStart();
};