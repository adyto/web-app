import React from "react";

import icAvatar from "../../../assets/icons/ic-avatar.png";
import icLogout from "../../../assets/icons/ic-logout.svg";

import DoughnutChart from "./DoughnutChart";

const DashboardContent = () => {
  return (
    <div className="w-4/5 2xl:px-[40px]">
      {/* Navbar */}
      <div className="flex flex-row-reverse 2xl:mr-[60px] items-center space-x-[93px] space-x-reverse 2xl:mt-[35px] 2xl:mb-10">
        <a
          href="../../sign-in"
          className="flex flex-row items-center cursor-pointer"
        >
          <img src={icLogout} />
          <span className="font-bold text-2xl 2xl:ml-2">Keluar</span>
        </a>

        <div className="flex flex-row items-center">
          <img src={icAvatar} className="rounded-full" />
          <p className="text-xl font-bold 2xl:ml-3.5">Angelina Sisca</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex flex-col">
        <p className="font-bold 2xl:text-[58px] 2xl:mb-3">Dashboard</p>
        <p className="font-medium text-2xl">
          <span className="text-[#9A9A9A]">Home / </span>
          <span className="text-cyan font-bold text-[26px]">Dashboard</span>
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-row justify-between 2xl:mr-[60px]">
        <div className="rounded-xl shadow-[0px_3px_6px_rgba(0,0,0,0.16)]">
          <div className="">
            <div className="flex flex-row 2xl:px-[30px] 2xl:py-[30px]">
              <div className="flex flex-col 2xl:space-y-56">
                <p className="font-bold text-[28px]">Statistik Ibu & Anak</p>
                <div>ISI</div>
              </div>
              <h1>INI GAMBAR</h1>
            </div>
          </div>
        </div>
        <div className="rounded-xl shadow-[0px_3px_6px_rgba(0,0,0,0.16)]">
          <div className="">
            <div className="flex flex-row 2xl:px-[30px] 2xl:py-[30px]">
              <div className="flex flex-col 2xl:space-y-56">
                <p className="font-bold text-[28px]">Pola Konsumsi Pangan</p>
                <div>ISI</div>
              </div>
              <DoughnutChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
