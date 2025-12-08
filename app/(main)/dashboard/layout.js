import React from "react";
import DashboardPage from "./page";
import {BarLoader} from "react-spinners";
import { Suspense } from "react";

const DashboardLayout = () => {
  return (
    <div className="px-5">
      <h1 className="text-6xl font-bold gradient-title mb-5">Dashboard</h1>
      
      {/* DashboardLayout Page */}
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#3b8132" />}>
              <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
