import type { ReactNode } from "react";

import { redirect } from "next/navigation";

import { getMeAction } from "@/app/(auth)/_actions/getMeaction";

import CustomerDashboardLayout from "./_components/CustomerDashboardLayout";

type CustomerLayoutProps = {
  children: ReactNode;
};

const CustomerLayout = async ({ children }: CustomerLayoutProps) => {
  const user = await getMeAction();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "CUSTOMER" || user.status === "SUSPENDED") {
    redirect("/");
  }

  return <CustomerDashboardLayout>{children}</CustomerDashboardLayout>;
};

export default CustomerLayout;
