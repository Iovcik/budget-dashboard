"use client";

import { useState, useTransition } from "react";
import { Category } from "@/shared/api/generated/prisma";
import { normalizeSpaces } from "@/shared/helpers/normalize";
import { isEditCategory, ManageCategoryState } from "../model/types";
import { editCategory } from "../api/editCategory.action";
import { createCategory } from "../api/createCategory.action";
import { useDebounce } from "../../../shared/hooks/useDebounce";
import { INITIAL_CATEGORY_DATA } from "../consts";

export const CategoryForm = (payload: Category) => {
  const [category, setCategory] = useState<Category>(payload);
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<ManageCategoryState | null>({
    error: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = { ...category };
    const value = normalizeSpaces(e.target.value);
    if (e.target.name === "color" && category.color !== value) {
      data.color = value;
    } else if (e.target.name === "name" && category.name !== value) {
      data.name = value;
    } else {
      return;
    }

    setCategory(data);

    setState(null);

    saveCategory(data);
  };

  const saveCategory = useDebounce((data: Category) => {
    startTransition(async () => {
      let result = null;

      if (isEditCategory(data)) {
        result = await editCategory(data);
      } else {
        result = await createCategory(data);

        if (!result.error) {
          setCategory({
            ...INITIAL_CATEGORY_DATA,
            boardId: payload.boardId,
          });
        }
      }
      setState(result);
    });
  });

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <input
          id="category-name"
          name="name"
          type="text"
          placeholder="New Category"
          className="input input-bordered w-full size-6"
          minLength={3}
          maxLength={100}
          required
          value={category.name}
          onChange={handleChange}
        />
        <input
          id="category-color"
          name="color"
          type="color"
          className="input input-bordered cursor-pointer size-6 w-20"
          value={category.color}
          onChange={handleChange}
        />
        <div className="w-6">
          {isPending && (
            <span className="loading loading-spinner loading-xs"></span>
          )}
        </div>
      </div>
      {state?.error && <p className="text-sm text-error">{state.error}</p>}
    </div>
  );
};
