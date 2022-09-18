import React from "react";

import SideBar from "../components/SideBar";
import DashboardContent from "../components/DashboardContent";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="font-Raleway w-screen">
        <div className="flex">
          {/* SideBar */}
          <SideBar />
          <DashboardContent />
        </div>
      </div>
    );
  }
}

export default Dashboard;
