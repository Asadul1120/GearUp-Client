import type { LucideIcon } from "lucide-react";

type DashboardStatCardProps = {
  title: string;
  value: number | string;
  description: string;
  icon: LucideIcon;
  iconStyle: string;
};

const DashboardStatCard = ({
  title,
  value,
  description,
  icon: Icon,
  iconStyle,
}: DashboardStatCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        {/* Statistic information */}
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">{value}</h2>

          <p className="mt-2 text-xs text-gray-500">{description}</p>
        </div>

        {/* Statistic icon */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconStyle}`}
        >
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
};

export default DashboardStatCard;
