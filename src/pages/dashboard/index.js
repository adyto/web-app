import React from "react";

import SideBar from "../components/SideBar";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="font-Raleway w-screen">
        <div className="flex">
          {/* SideBar */}
          <SideBar />
          <div className="w-4/5 2xl:mr-[40px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ratione assumenda sed temporibus autem numquam hic facere animi,
            ipsam quis ipsum quo accusantium amet, consectetur fugit molestiae
            minima distinctio atque!
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
