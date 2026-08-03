import { getCategoriesByBoardId } from "@/entities/category/index.server";
import { CategoryForm } from "./CategoryForm";
import { INITIAL_CATEGORY_DATA } from "../consts";

export const CategoryList = async ({ boardId }: { boardId: number }) => {
  const categories = await getCategoriesByBoardId(boardId);

  return (
    <div className="flex flex-col gap-5">
      <h3>Categories</h3>
      <div className="flex flex-col gap-1">
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryForm {...category} />
          </div>
        ))}

        <CategoryForm {...INITIAL_CATEGORY_DATA} boardId={boardId} />
      </div>
    </div>
  );
};
