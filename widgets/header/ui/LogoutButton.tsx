import { signOut } from "@/features/session";

export const LogoutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <button type="submit" className="btn btn-ghost">
        Logout
      </button>
    </form>
  );
};
