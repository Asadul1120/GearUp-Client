import { CheckCircle2, Ban } from "lucide-react";

interface UserStatusBadgeProps {
  status: "ACTIVE" | "SUSPENDED";
}

export default function UserStatusBadge({
  status,
}: UserStatusBadgeProps) {
  const active = status === "ACTIVE";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${
        active
          ? "border-green-200 bg-green-100 text-green-700"
          : "border-red-200 bg-red-100 text-red-700"
      }`}
    >
      {active ? (
        <CheckCircle2 size={14} />
      ) : (
        <Ban size={14} />
      )}

      {active ? "Active" : "Suspended"}
    </span>
  );
}