import Dashboard from "@/components/Dashboard/Dashboard";
import withAuth from "@/components/withAuth";
import { useSession } from "next-auth/react";
import React from "react";

const DashboardPage = () => {
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default withAuth(DashboardPage);
