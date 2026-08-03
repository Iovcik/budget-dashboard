"use client";
import { IconSettings } from "@/shared/icons/Settings";
import { boardSettingsModalId } from "../consts";

export const SettingsButton = () => {
  return (
    <button
      className="btn btn-sm btn-circle"
      onClick={() => {
        const dialog = document.getElementById(
          boardSettingsModalId,
        ) as HTMLDialogElement | null;
        dialog?.showModal();
      }}
    >
      <IconSettings />
    </button>
  );
};
