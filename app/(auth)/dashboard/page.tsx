import { BoardList } from "@/widgets";

export default function Dashboard() {
  return (
    <div className="flex flex-col flex-1 w-full max-w-5xl px-6 py-10">
      <div className="card shadow-xl p-5">
        <BoardList />
      </div>
    </div>
  );
}
