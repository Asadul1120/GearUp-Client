import type { LucideIcon } from "lucide-react";

type AdminStatCardProps = {
  title: string;
  value: number;
  icon: LucideIcon;
};

const AdminStatCard = ({
  title,
  value,
  icon: Icon,
}: AdminStatCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
        <Icon size={24} />
      </div>

      <div>
        <p className="text-sm text-gray-500">
          {title}
        </p>

        <p className="mt-1 text-2xl font-bold text-gray-900">
          {value}
        </p>
      </div>
    </div>
  );
};

export default AdminStatCard;