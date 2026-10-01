import React from "react";
import AdminHeader from "../components/AdminHeader";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div>
      <AdminHeader />
      <div className="md:grid md:grid-cols-6 items-stretch">
        <div className="col-span-1">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-5">
          <h1>dashboard content</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
