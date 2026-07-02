import { LogoutButton } from "./LogoutButton";

export const Header = () => {
  return (
    <header className="flex justify-end shadow-xl p-5">
      <LogoutButton />
    </header>
  );
};
