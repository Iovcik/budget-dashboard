"use client";

import { useState, useTransition } from "react";
import { deleteBoard } from "../api/deleteBoard.action";

interface DeleteBoardButtonProps {
  boardId: number;
}

export const DeleteBoardButton = ({ boardId }: DeleteBoardButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const modalId = `delete-board-modal-${boardId}`;

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteBoard(boardId);
      if (result.error) {
        setError(result.error);
      } else {
        const dialog = document.getElementById(
          modalId,
        ) as HTMLDialogElement | null;
        dialog?.close();
      }
    });
  };

  return (
    <>
      <button
        className="btn btn-sm"
        onClick={() => {
          const dialog = document.getElementById(
            modalId,
          ) as HTMLDialogElement | null;
          dialog?.showModal();
        }}
      >
        Delete
      </button>
      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete board?</h3>
          <p className="py-2 text-sm">
            This will permanently delete the board and all its data.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
            <button
              className="btn btn-error"
              disabled={isPending}
              onClick={handleDelete}
            >
              {isPending ? "Deleting..." : "Delete"}
            </button>
          </div>
          {error && <p className="text-sm text-error">{error}</p>}
        </div>
      </dialog>
    </>
  );
};
