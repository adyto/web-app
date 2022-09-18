import React from "react";

import imgLogo from "../../../assets/images/img-logo.png";
import icDashboard from "../../../assets/icons/ic-dashboard.svg";
import icBerita from "../../../assets/icons/ic-berita.svg";
import icMasterData from "../../../assets/icons/ic-masterData.svg";

const SideBar = () => {
  return (
    <div className="w-1/5 2xl:pl-[35.5px] 2xl:pt-[30px] 2xl:pb-[50px] bg-cyan">
      <div className="2xl:pl-[34.5px]">
        <img src={imgLogo} className="object-contain h-16 w-16 2xl:mb-[59px]" />

        {/* Menu Item */}
        <div className="flex flex-col 2xl:space-y-8">
          <div className="flex flex-row items-center">
            <img src={icDashboard} />
            <span className="2xl:ml-[30px] 2xl:text-[22px] font-medium text-white">
              Dashboard
            </span>
          </div>
          <div className="flex flex-row items-center">
            <img src={icBerita} />
            <span className="2xl:ml-[30px] 2xl:text-[22px] font-medium text-white">
              Berita
            </span>
          </div>
          <div className="flex flex-row items-center">
            <img src={icMasterData} />
            <span className="2xl:ml-[30px] 2xl:text-[22px] font-medium text-white">
              Master Data
            </span>
          </div>
          <ul className="items-center">
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
