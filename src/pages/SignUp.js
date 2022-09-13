import React from "react";

import imgLogo from "../assets/images/img-logo.png";
import img1 from "../assets/images/img-sign-up-1.png";
import img2 from "../assets/images/img-sign-up-2.png";
import img3 from "../assets/images/img-sign-up-3.png";

const SignUp = () => {
  return (
    <div className="container 3xl:px-[120px] mx-auto  3xl:mt-[50px] font-Raleway">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col 3xl:w-2/5">
          <div className="3xl:w-[60px] 3xl:h-[70px]">
            <img src={imgLogo} alt="logo banner" />
          </div>
          <p className="font-bold 3xl:text-4xl 3xl:mt-10 3xl:mb-4">Daftar</p>
          <p className="text-xl">
            Sudah memiliki akun?{" "}
            <a
              href="/sign-in"
              className="text-cyan font-bold underline underline-offset-8"
            >
              Masuk Sekarang
            </a>
          </p>
          <div className="flex flex-row 3xl:mb-6 3xl:mt-[38px] 3xl:w-[598px] ">
            <p className="font-bold text-2xl w-1/2 3xl:w-[311px]  after:content-['*'] after:ml-0.5 after:text-red-500">
              Nama depan
            </p>
            <p className=" font-bold text-2xl w-1/2 3xl:w-auto  after:content-['*'] after:ml-0.5 after:text-red-500">
              Nama akhir
            </p>
          </div>
          <div className="flex flex-row w-[598px] justify-between 3xl:mb-[43px]">
            <input
              type="text"
              name="firstName"
              className="3xl:pl-[23px] 3xl:py-[23px] bg-white border shadow-sm border-slate-400 placeholder-slate-500 focus:outline-none focus:border-ring-blue-500/500 focus:ring-ring-blue-500/50 3xl:w-[287px] w-full rounded-2xl sm:text-sm focus:ring-1 placeholder:text-base"
              placeholder="Masukan nama depan"
            />
            <input
              type="text"
              name="lastName"
              className="3xl:pl-[23px] 3xl:py-[23px] bg-white border shadow-sm border-slate-400 placeholder-slate-500 focus:outline-none focus:border-ring-blue-500/500 focus:ring-ring-blue-500/50  3xl:w-[287px] w-full rounded-2xl sm:text-sm focus:ring-1 placeholder:text-base"
              placeholder="Masukan nama belakang"
            />
          </div>
          <div className="3xl:mb-[45px]">
            <p className="text-2xl font-bold 3xl:mb-[26px] after:content-['*'] after:ml-0.5 after:text-red-500">
              Email / No. handphone
            </p>
            <input
              type="email"
              name="email"
              className="3xl:pl-[23px] 3xl:py-[23px] bg-white border shadow-sm border-slate-400 placeholder-slate-500 focus:outline-none focus:border-ring-blue-500/500 focus:ring-ring-blue-500/50 block 3xl:w-[598px] w-full rounded-20px sm:text-sm focus:ring-1 placeholder:text-base"
              placeholder="Masukan email / No. Handphone "
            />
          </div>
          <div className="3xl:mb-[63px]">
            <p className="text-2xl font-bold 3xl:mb-6 after:content-['*'] after:ml-0.5 after:text-red-500">
              Kata Sandi
            </p>
            <input
              type="password"
              name="password"
              className="3xl:pl-[23px] 3xl:py-[23px] bg-white border shadow-sm border-slate-400 placeholder-slate-500 focus:outline-none focus:border-ring-blue-500/50 focus:ring-blue-500/50 block 3xl:w-[598px] w-full rounded-20px sm:text-sm focus:ring-1 placeholder:text-base"
              placeholder="Masukan kata sandi "
            />
          </div>
          <button
            type="submit"
            className="text-white bg-cyan hover:ring-2 hover:ring-blue-500/50  font-medium 3xl:text-[26px] 3xl:w-[598px] 3xl:h-[80px]  3xl:py-[25px] text-center rounded-2xl leading-[30px] 3xl:mb-[132px]"
          >
            Submit
          </button>
          <p className="3xl:mb-[60px]">
            Powered by{" "}
            <span className="text-cyan font-bold">Pemkab Muara Enim</span>
          </p>
        </div>
        <div className="flex flex-col 3xl:w-3/5 relative">
          <div className="absolute 3xl:top-[50px] 3xl:right-[14px]">
            <img src={img3} alt="img3" />
          </div>
          <div className="absolute 3xl:right-0 3xl:bottom-[115px]">
            <img src={img2} alt="img2" />
          </div>
          <div className="absolute 3xl:right-0 3xl:bottom-[115px]">
            <img src={img1} alt="img1" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SignUp;
