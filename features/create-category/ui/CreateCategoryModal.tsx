"use client";

import { useActionState, useEffect, useRef } from "react";
import { createCategory } from "../api/createCategory.action";

export const CreateCategoryModal = ({ boardId }: { boardId: number }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [state, formAction, isPending] = useActionState(createCategory, null);

  useEffect(() => {
    if (state?.success) {
      dialogRef.current?.close();
    }
  }, [state]);

  return (
    <dialog ref={dialogRef} id="create-category-dialog" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add Category</h3>
        <form action={formAction} className="mt-4 flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="board-name" className="text-sm font-medium">
                Category name
              </label>
              <input
                id="board-name"
                name="name"
                type="text"
                placeholder="My Budget"
                className="input input-bordered w-full"
                minLength={3}
                maxLength={100}
                required
                disabled={isPending}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="board-color" className="text-sm font-medium">
                Pick color
              </label>
              <input
                id="board-color"
                name="color"
                type="color"
                className="input input-bordered cursor-pointer"
                defaultValue={"#10b981"}
                disabled={isPending}
              />
            </div>
            <input type="text" defaultValue={boardId} name="boardId" hidden />
          </div>
          {state?.error && <p className="text-sm text-error">{state.error}</p>}
          <div className="modal-action justify-start mt-2">
            <button
              type="button"
              className="btn"
              onClick={() => dialogRef.current?.close()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isPending}
            >
              {isPending ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
