import type { LucideIcon } from "lucide-react";

type CustomerStatCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
};

const CustomerStatCard = ({
  title,
  value,
  icon: Icon,
}: CustomerStatCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
        <Icon size={24} />
      </div>

      <div className="min-w-0">
        <p className="truncate text-sm text-gray-500">{title}</p>

        <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default CustomerStatCard;
