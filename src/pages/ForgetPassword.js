import React from "react";

import imgLogo from "../assets/images/img-logo.png";
import img1 from "../assets/images/img-forget-password-1.png";
import img2 from "../assets/images/img-forget-password-2.png";
import img3 from "../assets/images/img-forget-password-3.png";
import img4 from "../assets/images/img-forget-password-4.png";
import img5 from "../assets/images/img-forget-password-5.png";
import img6 from "../assets/images/img-forget-password-6.png";
import img7 from "../assets/images/img-forget-password-7.png";
import img8 from "../assets/images/img-forget-password-8.png";
import img9 from "../assets/images/img-forget-password-9.png";

const ForgetPassword = () => {
  return (
    <div className="container 3xl:px-[120px] mx-auto  3xl:mt-[50px]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col 3xl:w-2/5">
          <div className="3xl:w-[60px] 3xl:h-[70px]">
            <img src={imgLogo} alt="logo banner" />
          </div>
          <p className="font-bold 3xl:text-4xl 3xl:mt-[243px] 3xl:mb-4">
            Lupa Kata Sandi?
          </p>
          <p className="3xl:text-xl">
            Jangan khawatir kehilangan akses akun Anda.
            <span className="block">
              Silahkan masukan alamat email terdaftar dibawah ini
            </span>
          </p>
          <div className="3xl:mt-[34px] 3xl:mb-[46px]">
            <input
              type="email"
              name="email"
              className="3xl:pl-[23px] 3xl:py-[23px] bg-white border shadow-sm border-slate-400 placeholder-slate-500 focus:outline-none focus:border-ring-blue-500/500 focus:ring-ring-blue-500/50 block 3xl:w-[598px] w-full rounded-20px sm:text-sm focus:ring-1 placeholder:text-base"
              placeholder="Masukan nama email anda "
            />
          </div>
          <button
            type="submit"
            className="text-white bg-cyan hover:ring-2 hover:ring-blue-500/50  font-medium 3xl:text-[26px] 3xl:w-[598px] 3xl:h-[80px]  3xl:py-[25px] text-center rounded-2xl leading-[30px] 3xl:mb-[319px]"
          >
            Lanjutkan
          </button>
          <p className="3xl:mb-[60px]">
            Powered by{" "}
            <span className="text-cyan font-bold">Pemkab Muara Enim</span>
          </p>
        </div>
        <div className="flex flex-col 3xl:w-3/5 relative">
          <div className="absolute  3xl:top-[45px] 3xl:right-[13px]">
            <img src={img1} alt="img forget password-1" />
          </div>
          <div className="absolute 3xl:right-[77px] 3xl:bottom-[84px] z-10">
            <img src={img2} alt="img forget password-2" />
          </div>
          <div className="absolute 3xl:right-0 3xl:bottom-[114px] z-0">
            <img src={img3} alt="img forget password-3" />
          </div>
          <div className="absolute 3xl:top-[208px] 3xl:right-[413px]">
            <img src={img4} alt="img forget password-4" />
          </div>
          <div className="absolute 3xl:top-[135px] 3xl:right-[196px]">
            <img src={img5} alt="img forget password-5" />
          </div>
          <div className="absolute 3xl:top-[296px] 3xl:right-[190px]">
            <img src={img6} alt="img forget password-6" />
          </div>
          <div className="absolute 3xl:top-[85px] 3xl:right-[624px]">
            <img src={img7} alt="img forget password-7" />
          </div>
          <div className="absolute 3xl:top-[453px] 3xl:right-[785px]">
            <img src={img8} alt="img forget password-8" />
          </div>
          <div className="absolute 3xl:top-[317px] 3xl:right-[731px]">
            <img src={img9} alt="img forget password-9" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;
