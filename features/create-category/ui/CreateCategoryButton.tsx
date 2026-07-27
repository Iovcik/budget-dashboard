"use client";

export const CreateCategoryButton = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        const dialog = document.getElementById(
          "create-category-dialog",
        ) as HTMLDialogElement | null;
        dialog?.showModal();
      }}
    >
      Add category
    </button>
  );
};
