import { db } from "@/shared/api";
import { notFound } from "next/navigation";
import { verifySession } from "@/features/session";
import { getUserBoardRole } from "@/entities/board/index.server";
import { BoardMenu } from "../../../widgets/board-settings";

export const BoardPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const slugId = slug.split("-").pop();

  const boardId = Number(slugId);

  if (!boardId || isNaN(boardId)) {
    return notFound();
  }

  const board = await db.board.findUnique({
    where: {
      id: boardId,
    },
  });

  if (!board) {
    return notFound();
  }

  const session = await verifySession();
  const user = await getUserBoardRole(boardId, session.userId);

  if (!user || user.boardId !== boardId) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-5">
      <BoardMenu boardId={boardId} />
      <div>
        <h1 className="text-center w-full">{board.name}</h1>
      </div>
    </div>
  );
};
