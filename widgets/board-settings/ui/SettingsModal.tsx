import { CategoryList } from "@/features/manage-category";
import { boardSettingsModalId } from "../consts";
import { SettingsButton } from "./SettingsButtons";
import { TTab } from "../types";
import { SettingsTab } from "./SettingsTab";

type SettingsModalProps = {
  boardId: number;
};

export default function SettingsModal({ boardId }: SettingsModalProps) {
  const tabs: TTab[] = [
    {
      id: "categories",
      label: "Categories",
      content: <CategoryList boardId={boardId} />,
      defaultChecked: true,
    },
  ];

  return (
    <dialog className="modal" id={boardSettingsModalId}>
      <div className="modal-box max-w-5xl h-150 flex flex-col">
        <h3 className="font-bold text-lg mb-4">Settings</h3>

        <div className="flex flex-1 gap-6 overflow-hidden">
          <div className="tabs tabs-border w-full">
            {tabs.map((tab) => (
              <SettingsTab {...tab} key={tab.id} />
            ))}
          </div>
        </div>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
