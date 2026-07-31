"use client";

import { useState } from "react";
import DashboardHeader from "@/app/(dashboard)/_components/DashboardHeader";
import DashboardSidebar from "@/app/(dashboard)/_components/DashboardSidebar";
import MobileSidebar from "@/app/(dashboard)/_components/MobileSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <DashboardSidebar />

      <MobileSidebar
        open={open}
        onClose={() => setOpen(false)}
      />

      <div className="flex flex-1 flex-col">
        <DashboardHeader
          onMenuClick={() => setOpen(true)}
        />

        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}