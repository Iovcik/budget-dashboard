import { CategoryList } from "../../../features/manage-category/ui/CategoryList";

export const BoardMenu = ({ boardId }: { boardId: number }) => {
  return (
    <div className="flex justify-end items-center shadow-2xs p-3">
      <CategoryList boardId={boardId} />
    </div>
  );
};
