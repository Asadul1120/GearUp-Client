import type { ReactNode } from "react";

import ProviderDashboardLayout from "./_components/ProviderDashboardLayout";

type ProviderLayoutProps = {
  children: ReactNode;
};

const ProviderLayout = ({
  children,
}: ProviderLayoutProps) => {
  return (
    <ProviderDashboardLayout>
      {children}
    </ProviderDashboardLayout>
  );
};

export default ProviderLayout;