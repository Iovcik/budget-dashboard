import { db } from "@/shared/api";

export const BoardPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const id = slug.split("-").pop();

  if (!Number(id)) {
    return <div>Invalid id!</div>;
  }

  const board = await db.board.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!board) {
    return <div>Board not found!</div>;
  }

  return <h1>{board.name}</h1>;
};
