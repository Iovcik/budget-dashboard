import type { Board, BoardRole } from "@/shared/api/generated/prisma";
import { DeleteBoardButton } from "@/features/delete-board";
import { RenameBoardForm } from "@/features/rename-board";

interface BoardCardProps {
    board: Board;
    role: BoardRole;
}

export const BoardCard = ({ board, role }: BoardCardProps) => {
    const isOwner = role === "OWNER";

    return (
        <div className="card bg-base-100 border border-base-300">
            <div className="card-body gap-3">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="card-title text-base">{board.name}</h3>
                    <span className="text-xs font-medium text-base-content/50 shrink-0">{role}</span>
                </div>
                {isOwner && (
                    <div className="card-actions flex gap-2">
                        <RenameBoardForm boardId={board.id} currentName={board.name} />
                        <DeleteBoardButton boardId={board.id} />
                    </div>
                )}
            </div>
        </div>
    );
};
