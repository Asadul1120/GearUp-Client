import { Shield, User, BriefcaseBusiness } from "lucide-react";

interface UserRoleBadgeProps {
  role: "ADMIN" | "CUSTOMER" | "PROVIDER";
}

export default function UserRoleBadge({
  role,
}: UserRoleBadgeProps) {
  const roleConfig = {
    ADMIN: {
      label: "Admin",
      icon: Shield,
      className: "bg-red-100 text-red-700 border-red-200",
    },
    CUSTOMER: {
      label: "Customer",
      icon: User,
      className: "bg-blue-100 text-blue-700 border-blue-200",
    },
    PROVIDER: {
      label: "Provider",
      icon: BriefcaseBusiness,
      className: "bg-green-100 text-green-700 border-green-200",
    },
  };

  const config = roleConfig[role];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${config.className}`}
    >
      <Icon size={14} />
      {config.label}
    </span>
  );
}