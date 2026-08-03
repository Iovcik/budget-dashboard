import { SettingsButton } from "./SettingsButtons";
import SettingsModal from "./SettingsModal";

export const BoardMenu = ({ boardId }: { boardId: number }) => {
  return (
    <div className="flex justify-end items-center shadow-2xs p-3">
      <SettingsButton />
      <SettingsModal boardId={boardId} />
    </div>
  );
};
