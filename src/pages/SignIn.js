import React from "react";
import imgLogo from "../assets/images/img-logo.png";

class SingIn extends React.Component {
  render() {
    return (
      <div className="container 3xl:container mx-auto 3xl:mt-12 font-Raleway">
        <form>
          <div className="grid grid-cols-2">
            <div className="grid grid-rows ">
              <img src={imgLogo} />
              <p className="3xl:my-10">
                <span className="text-4xl font-bold ">Masuk</span>
                <span className="block 3xl:mt-4 text-xl">
                  Monitoring Pola Konsumsi Ibu dan Anak
                </span>
              </p>
              <div className="3xl:mb-8">
                <p className="text-2xl font-bold 3xl:mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">
                  Email / No. handphone
                </p>
                <input
                  type="email"
                  name="email"
                  className="pl-6 py-6 bg-white border shadow-sm border-slate-400 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block 3xl:w-4/5 w-full rounded-20px sm:text-sm focus:ring-1 placeholder:text-base"
                  placeholder="Masukan email/No. Handphone "
                />
              </div>
              <div className="3xl:mb-8">
                <p className="text-2xl font-bold 3xl:mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">
                  Kata Sandi
                </p>
                <label class="relative block">
                  <input
                    type="password"
                    name="password"
                    className="pl-6 py-6 bg-white border shadow-sm border-slate-400 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block 3xl:w-4/5 w-full rounded-20px sm:text-sm focus:ring-1 placeholder:text-base"
                    placeholder="Masukan kata sandi"
                  />
                  <span className="absolute right-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="31.495"
                      height="27.001"
                      viewBox="0 0 31.495 27.001"
                      fill="currentColor"
                      aria-hidden="True"
                    >
                      <path
                        id="Path_1552"
                        data-name="Path 1552"
                        d="M18.3,24.321a6.322,6.322,0,0,1-6.012-9.028L8.529,11.531a49.321,49.321,0,0,0-5.984,5.716,1.112,1.112,0,0,0-.007,1.5c4.563,5.041,8.585,9.38,15.448,9.38a13.538,13.538,0,0,0,5.787-1.35l-3.059-3.059A6.389,6.389,0,0,1,18.3,24.321Z"
                        transform="translate(-2.252 -4.499)"
                        fill="#9a9a9a"
                      />
                      <path
                        id="Path_1553"
                        data-name="Path 1553"
                        d="M33.455,18.7a1.1,1.1,0,0,0,.035-1.455c-3.677-4.465-8.775-9.373-15.5-9.373A13.162,13.162,0,0,0,12.22,9.211l3.073,3.073a6.2,6.2,0,0,1,2.412-.6,6.322,6.322,0,0,1,6.012,9.028l3.762,3.762A46.51,46.51,0,0,0,33.455,18.7Z"
                        transform="translate(-2.252 -4.499)"
                        fill="#9a9a9a"
                      />
                      <path
                        id="Path_1554"
                        data-name="Path 1554"
                        d="M13.514,18.345a4.518,4.518,0,0,0,4.141,4.141A4.4,4.4,0,0,0,19.3,22.3L13.69,16.692A4.6,4.6,0,0,0,13.514,18.345Z"
                        transform="translate(-2.252 -4.499)"
                        fill="#9a9a9a"
                      />
                      <path
                        id="Path_1555"
                        data-name="Path 1555"
                        d="M22.5,18c0-.091-.007-.183-.007-.274a3.118,3.118,0,0,1-1.28.274c-.077,0-.148,0-.218-.007L22.3,19.308A4.5,4.5,0,0,0,22.5,18Z"
                        transform="translate(-2.252 -4.499)"
                        fill="#9a9a9a"
                      />
                      <path
                        id="Path_1556"
                        data-name="Path 1556"
                        d="M18,14.7a3.3,3.3,0,0,1,.218-1.188c-.07,0-.141-.007-.218-.007a4.448,4.448,0,0,0-1.3.2l1.315,1.315C18.007,14.906,18,14.8,18,14.7Z"
                        transform="translate(-2.252 -4.499)"
                        fill="#9a9a9a"
                      />
                    </svg>
                  </span>
                </label>
              </div>
              <div className="flex items-center justify-between">
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
              <div className="3xl:my-8">
                <button
                  type="submit"
                  className="w-full 3xl:w-3/4 flex justify-center py-6 border border-transparent text-2xl font-bold rounded-2xl text-white bg-cyan
                  hover:outline-none hover:ring-1 hover:ring-offset-3 hover:ring-blue-600 ease-linear duration-150"
                >
                  Masuk
                </button>
              </div>
              <div className="3xl:mb-8">
                <div className="flex items-center 3xl:mb-6">
                  <div class="border border-slate-400 w-1/4 h-0 "></div>
                  <label className="3xl:mx-6">atau masuk dengan</label>
                  <div class="border border-slate-400 w-1/4 h-0"></div>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55"
                  >
                    <svg
                      className="mr-2 -ml-1 w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                      ></path>
                    </svg>
                    Facebook
                  </button>
                  <button
                    type="button"
                    className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55"
                  >
                    <svg
                      className="mr-2 -ml-1 w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Google
                  </button>
                </div>
              </div>
            </div>
            <div className="">02</div>
          </div>
        </form>
      </div>
    );
  }
}
export default SingIn;
