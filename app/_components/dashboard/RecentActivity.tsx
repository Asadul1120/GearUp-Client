interface RecentActivityProps {
  title: string;
}

export default function RecentActivity({
  title,
}: RecentActivityProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        {title}
      </h2>

      <div className="flex h-56 items-center justify-center rounded-lg border border-dashed text-gray-400">
        No data available
      </div>
    </div>
  );
}