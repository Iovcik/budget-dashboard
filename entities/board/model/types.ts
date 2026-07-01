import type { Board, BoardRole, UserBoard } from "@/shared/api/generated/prisma";

export interface IBoardWithRole extends Board {
    role: BoardRole
}

export interface IBoardWithMembers extends IBoardWithRole {
    members: UserBoard[]
}