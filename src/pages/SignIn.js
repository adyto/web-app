import React from "react";

import imgLogo from "../assets/images/img-logo.png";
import img1 from "../assets/images/img-sign-in-1.png";
import img2 from "../assets/images/img-sign-in-2.png";
import img3 from "../assets/images/img-sign-in-3.png";
import icHide from "../assets/icons/ic-hide.svg";
import icFacebook from "../assets/icons/ic-facebook.svg";
import icGoogle from "../assets/icons/ic-google.svg";

class SingIn extends React.Component {
  render() {
    return (
      <div className="container 3xl:px-[120px] mx-auto 3xl:mt-[50px] font-Raleway">
        <form>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col 3xl:w-2/5">
              <div className="3xl:w-[60px] 3xl:h-[70px]">
                <img src={imgLogo} alt="logo banner" />
              </div>
              <p className="font-bold 3xl:text-4xl 3xl:mt-10 3xl:mb-4">Masuk</p>
              <p className="text-xl">Monitoring Pola Konsumsi Ibu dan Anak</p>
              <div className="3xl:mb-[45px] 3xl:mt-10">
                <p className="text-2xl font-bold 3xl:mb-6 after:content-['*'] after:ml-0.5 after:text-red-500">
                  Email / No. handphone
                </p>
                <input
                  type="email"
                  name="email"
                  className="3xl:pl-[23px] 3xl:py-[23px] bg-white border shadow-sm border-slate-400 placeholder-slate-500 focus:outline-none focus:border-ring-blue-500/500 focus:ring-ring-blue-500/50 block 3xl:w-[598px] w-full rounded-20px sm:text-sm focus:ring-1 placeholder:text-base"
                  placeholder="Masukan email / No. Handphone "
                />
              </div>
              <p className="text-2xl font-bold 3xl:mb-6 after:content-['*'] after:ml-0.5 after:text-red-500">
                Kata Sandi
              </p>
              <div className="relative 3xl:w-[598px]">
                <img src={icHide} className="absolute inset-y-1/2 right-0" />
                <input
                  type="password"
                  name="password"
                  className="3xl:pl-[23px] 3xl:py-[23px] bg-white border shadow-sm border-slate-400 placeholder-slate-500 focus:outline-none focus:border-ring-blue-500/50 focus:ring-blue-500/50 block w-full rounded-20px sm:text-sm focus:ring-1 placeholder:text-base"
                  placeholder="Masukan kata sandi"
                />
              </div>
              <div className="flex items-center justify-between 3xl:w-[598px] 3xl:my-8">
                <div className="flex items-center ">
                  <input
                    type="checkbox"
                    className="checkbox h-7 w-7 cursor-pointer bg-white accent-cyan"
                  />
                  <label className="font-bold  3xl:ml-5 ">Ingkatkan saya</label>
                </div>
                <a href="/forget" className="text-cyan font-bold">
                  Lupa kata sandi?
                </a>
              </div>
              <button
                type="submit"
                className="text-white bg-cyan hover:ring-2 hover:ring-blue-500/50  font-medium 3xl:text-[26px] 3xl:w-[598px] 3xl:h-[80px]  3xl:py-[25px] text-center rounded-2xl leading-[30px] 3xl:mb-8"
              >
                Submit
              </button>
              <div className="3xl:mb-8 3xl:w-[598px]">
                <div className="flex items-center 3xl:mb-6 ">
                  <div class="border border-slate-400 w-full" />
                  <p className="mx-8 min-w-max">atau masuk dengan</p>
                  <div class="border border-slate-400 w-full" />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="text-black rounded-2xl justify-center  font-bold text-xl items-center border border-[#9A9A9A] px-auto py-3.5 inline-flex  3xl:w-[287px] hover:ring-2 hover:ring-blue-500/50"
                  >
                    <img src={icFacebook} className="3xl:mr-[15px]" />
                    Facebook
                  </button>
                  <button
                    type="button"
                    className="text-black rounded-2xl justify-center  font-bold text-xl items-center border border-[#9A9A9A] px-auto py-3.5 inline-flex  3xl:w-[287px] hover:ring-2 hover:ring-blue-500/50"
                  >
                    <img src={icGoogle} className="3xl:mr-[15px]" />
                    Google
                  </button>
                </div>
              </div>
              <p className="text-xl 3xl:mb-[76px]">
                Belum punya akun?{" "}
                <a
                  href="/sign-up"
                  className="font-bold text-cyan underline underline-offset-4"
                >
                  Daftar Sini
                </a>
              </p>
              <p className="3xl:mb-[60px]">
                Powered by{" "}
                <span className="text-cyan font-bold">Pemkab Muara Enim</span>
              </p>
            </div>
            <div className="flex flex-col 3xl:w-3/5 relative">
              <div className="absolute 3xl:top-[13px] 3xl:right-[25px]">
                <img src={img1} />
              </div>
              <div className="absolute 3xl:bottom-[114px] 3xl:right-[25px]">
                <img src={img2} />
              </div>
              <div className="absolute 3xl:bottom-[114px] 3xl:right-[719px]">
                <img src={img3} />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SingIn;
