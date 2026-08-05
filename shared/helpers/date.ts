export const getCurrentMonthYear = (): { month: number; year: number } => {
    const now = new Date();
    return { month: now.getMonth() + 1, year: now.getFullYear() };
};