"use client";

export const CreateBoardButton = () => {
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                const dialog = document.getElementById(
                    "create-board-dialog",
                ) as HTMLDialogElement | null;
                dialog?.showModal();
            }}
        >
            New Board
        </button>
    );
};
