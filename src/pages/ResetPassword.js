import React from "react";

import imgLogo from "../assets/images/img-logo.png";
import img1 from "../assets/images/img-reset-password-1.png";
import img2 from "../assets/images/img-reset-password-2.png";
import img3 from "../assets/images/img-reset-password-3.png";
import img4 from "../assets/images/img-reset-password-4.png";

const ResetPassword = () => {
  return (
    <div className="container 3xl:px-[120px] mx-auto  3xl:mt-[50px]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col 3xl:w-2/5">
          <div className="3xl:w-[60px] 3xl:h-[70px]">
            <img src={imgLogo} alt="logo banner" />
          </div>
          <p className="font-bold 3xl:text-4xl 3xl:mt-[172px] 3xl:mb-4">
            Masukan Kata Kunci Baru
          </p>
          <p className="3xl:text-xl">
            Yuk, sedikit lagi!
            <span className="block">
              Buat lagi kata kunci baru Anda dengan minimal 8 karakter
            </span>
          </p>
          <div className="3xl:mt-[34px] 3xl:mb-8">
            <input
              type="password"
              name="password"
              className="3xl:pl-[23px] 3xl:py-[23px] bg-white border shadow-sm border-slate-400 placeholder-slate-500 focus:outline-none focus:border-ring-blue-500/500 focus:ring-ring-blue-500/50 block 3xl:w-[598px] w-full rounded-20px sm:text-sm focus:ring-1 placeholder:text-base"
              placeholder="Kata Sandi Baru"
            />
          </div>
          <div className="3xl:mb-[46px]">
            <input
              type="password"
              name="password"
              className="3xl:pl-[23px] 3xl:py-[23px] bg-white border shadow-sm border-slate-400 placeholder-slate-500 focus:outline-none focus:border-ring-blue-500/500 focus:ring-ring-blue-500/50 block 3xl:w-[598px] w-full rounded-20px sm:text-sm focus:ring-1 placeholder:text-base"
              placeholder="Kata Sandi Baru"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-cyan hover:ring-2 hover:ring-blue-500/50  font-medium 3xl:text-[26px] 3xl:w-[598px] 3xl:h-[80px]  3xl:py-[25px] text-center rounded-2xl leading-[30px] 3xl:mb-[253px]"
          >
            Simpan
          </button>
          <p className="3xl:mb-[60px]">
            Powered by{" "}
            <span className="text-cyan font-bold">Pemkab Muara Enim</span>
          </p>
        </div>
        <div className="flex flex-col 3xl:w-3/5 relative">
          <div className="absolute 3xl:top-[50px] 3xl:right-[13px]">
            <img src={img1} alt="img forget password-1" />
          </div>
          <div className="absolute 3xl:bottom-[94px] 3xl:right-[74px] z-10">
            <img src={img2} alt="img forget password-2" />
          </div>
          <div className="absolute 3xl:bottom-[94px] 3xl:right-0">
            <img src={img3} alt="img forget password-3" />
          </div>
          <div className="absolute 3xl:bottom-[127px] 3xl:right-[707px] z-0">
            <img src={img4} alt="img forget password-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
