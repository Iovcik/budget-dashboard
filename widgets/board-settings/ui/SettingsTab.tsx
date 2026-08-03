import { TTab } from "../types";

export const SettingsTab = ({ content, label, defaultChecked, id }: TTab) => {
  return (
    <>
      <input
        type="radio"
        name="tabs"
        id={`settings-${id}`}
        className="tab"
        aria-label={label}
        defaultChecked={defaultChecked}
      />
      <div className="tab-content border-base-300 bg-base-100 p-10 w-full">
        {content}
      </div>
    </>
  );
};
