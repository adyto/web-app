import React from "react";

import icAvatar from "../../../assets/icons/ic-avatar.png";
import icLogout from "../../../assets/icons/ic-logout.svg";

const DashboardContent = () => {
  return (
    <div className="w-4/5 2xl:mr-[40px]">
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
      Losrem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione
      assumenda sed temporibus autem numquam hic facere animi, ipsam quis ipsum
      quo accusantium amet, consectetur fugit aaastiae minima distinctio atque!
    </div>
  );
};

export default DashboardContent;
