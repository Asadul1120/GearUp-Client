import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getLoggedInProvider } from "./_actions/providerAuthActions";
import ProviderDashboardLayout from "./_components/ProviderDashboardLayout";

type ProviderLayoutProps = {
  children: ReactNode;
};

const ProviderLayout = async ({ children }: ProviderLayoutProps) => {
  const result = await getLoggedInProvider();

  if (!result.success && result.message === "Please login first.") {
    redirect("/login");
  }

  if (!result.success || !result.data) {
    redirect("/");
  }

  const provider = result.data;

  return (
    <ProviderDashboardLayout
      providerName={provider.name}
      providerEmail={provider.email}
    >
      {children}
    </ProviderDashboardLayout>
  );
};

export default ProviderLayout;
