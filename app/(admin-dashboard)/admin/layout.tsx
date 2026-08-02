import type { ReactNode } from "react";

import { redirect } from "next/navigation";

import { getLoggedInAdmin } from "./_actions/adminAuthActions";
import AdminDashboardLayout from "./_components/AdminDashboardLayout";

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout = async ({ children }: AdminLayoutProps) => {
  const result = await getLoggedInAdmin();

  if (!result.success && result.message === "Please login first.") {
    redirect("/login");
  }

  if (!result.success || !result.data) {
    redirect("/");
  }

  const admin = result.data;

  return (
    <AdminDashboardLayout adminName={admin.name} adminEmail={admin.email}>
      {children}
    </AdminDashboardLayout>
  );
};

export default AdminLayout;
