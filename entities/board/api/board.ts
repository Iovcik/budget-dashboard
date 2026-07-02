import "server-only";
import { db } from "@/shared/api";

export const getBoardsByUserId = async (userId: string) => await db.userBoard.findMany({ where: { userId: Number(userId) }, include: { board: true } });

export const getBoardById = async (boardId: number) => await db.board.findUnique({ where: { id: boardId } });

export const getUserBoardRole = async (boardId: number, userId: string) => await db.userBoard.findUnique({
    where: { userId_boardId: { userId: Number(userId), boardId: boardId } }
});

export const createBoard = async (name: string, ownerId: string) => await db.$transaction(async (tx) => {
    const board = await tx.board.create({
        data: { name },
    });

    const userBoard = await tx.userBoard.create({
        data: {
            userId: Number(ownerId),
            boardId: board.id,
            role: "OWNER"
        },
    });

    return { board, userBoard };

});

export const updateBoardName = async (boardId: number, boardName: string) => await db.board.update({ where: { id: boardId }, data: { name: boardName } });

export const deleteBoard = async (boardId: number) => await db.board.delete({ where: { id: boardId } });