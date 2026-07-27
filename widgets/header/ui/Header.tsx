import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export const Header = () => {
  return (
    <header className="flex justify-end shadow-xl p-5 items-center gap-2">
      <Link href={"/dashboard"}>Dashboard</Link>
      <LogoutButton />
    </header>
  );
};
