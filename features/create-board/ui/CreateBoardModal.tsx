"use client";

import { useActionState, useEffect, useRef } from "react";
import { createBoard } from "../api/createBoard.action";

export const CreateBoardModal = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [state, formAction, isPending] = useActionState(createBoard, null);

    useEffect(() => {
        if (state?.success) {
            dialogRef.current?.close();
        }
    }, [state]);

    return (
        <dialog ref={dialogRef} id="create-board-dialog" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Create Board</h3>
                <form action={formAction} className="mt-4 flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="board-name" className="text-sm font-medium">
                            Board name
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
                    {state?.error && (
                        <p className="text-sm text-error">{state.error}</p>
                    )}
                    <div className="modal-action mt-0">
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
