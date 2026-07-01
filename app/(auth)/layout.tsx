import { Header } from "@/widgets";
import { verifySession } from "@/features/session";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = await verifySession();
  return (
    <div className="h-screen flex justify-center items-center">
      {isAuthenticated.isAuth && <Header />}
      {children}
    </div>
  );
}
