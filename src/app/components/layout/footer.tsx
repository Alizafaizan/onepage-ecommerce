import { FaFacebook, FaInstagram, FaLinkedin, } from "react-icons/fa";


export default function Footer(){
    return(
        <footer className="bg-slate-800  py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <FaFacebook className="text-xl text-white" />
            </div>
            <div className="header_top__icon_wrapper">
              <FaInstagram className="text-xl text-white" />
            </div>
            <div className="header_top__icon_wrapper">
              <FaLinkedin className="text-xl text-white" />
            </div>
          </div>
          <div>
            <p className="text-center text-white font-semibold">
              © 2024 ZFCLOTHES. All rights reserved.
            </p>
          </div>
          <div className="text-white text-[20px] hidden md:flex items-center">
            <b>FREE SHIPPING</b> THIS MONTH ORDER OVER - 1M
          </div>
        </div>
      </footer>
    )
}