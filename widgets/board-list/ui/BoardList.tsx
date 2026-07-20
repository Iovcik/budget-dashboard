import { verifySession } from "@/features/session";
import { getBoardsByUserId } from "@/entities/board/index.server";
import { CreateBoardButton, CreateBoardModal } from "@/features/create-board";
import { BoardCard } from "./BoardCard";

export const BoardList = async () => {
    const { userId } = await verifySession();
    const userBoards = await getBoardsByUserId(userId);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Your Boards</h2>
                <CreateBoardButton />
            </div>
            {userBoards.length === 0 ? (
                <p className="text-base-content/50">
                    No boards yet. Create one to get started.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {userBoards.map(({ board, role }) => (
                        <BoardCard key={board.id} board={board} role={role} />
                    ))}
                </div>
            )}
            <CreateBoardModal />
        </div>
    );
};
