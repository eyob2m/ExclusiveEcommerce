import sendIcon from "../icons/icon-send.png";
import qr from "../assets/Qrcode 1.png";
import googleplay from "../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import appstore from "../assets/download-appstore.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiInstagram, CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-black relative px-[100px] pb-[90px]  py-[80px] text-tfa">
      <div className="wrapper justify-between gap-20 flex">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-[18px]">
            <h1 className="text-[2.4rem] font-[700]">Exclusive</h1>
            <h2 className="text-[1.99992rem] font-[500]">Subscribe</h2>
            <h3 className="text-[1.59984rem] font-[400]">
              Get 10% off your first order
            </h3>
          </div>
          <div className="flex w-[200px] justify-start px-3 rounded-lg  py-5 border    border-tfa">
            <div>
              {" "}
              <input
                className="w-[90%] text-[1.59984rem] bg-transparent focus:border-none focus:outline-none"
                placeholder="Enter your email"
                type="text"
              />
            </div>
            <img className="" src={sendIcon} alt="" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-[18px]">
            <h1 className="text-[2.4rem] font-[500]">Support</h1>
            <h3 className="text-[1.59984rem] font-[400]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </h3>
            <h3 className="text-[1.59984rem] font-[400]">
              exclusive@gmail.com
            </h3>
            <h3 className="text-[1.59984rem] font-[400]">+88015-88888-9999</h3>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex text-[1.59984rem] font-[400] flex-col gap-[18px]">
            <h1 className="text-[2.4rem] font-[500]">Account</h1>
            <h3>My Account</h3>
            <h3>Login / Register</h3>
            <h3>Cart</h3>
            <h3>Wishlist</h3>
            <h3>Shop</h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div className="flex text-[1.59984rem] font-[400] flex-col gap-[18px]">
            <h1 className="text-[2.4rem] font-[500]">Quick Link</h1>
            <h3>Privacy Policy</h3>
            <h3>Terms Of Use</h3>
            <h3>FAQ</h3>
            <h3>Contacts</h3>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-[18px]">
            <h1 className="text-[2.4rem] font-[500]">Download App</h1>
            <div className="flex flex-col gap-2">
              <h4 className="text-[1.2rem] font-[500] ">
                Save $3 with App New User Only
              </h4>
              <div className="flex gap-2">
                <img src={qr} alt="" />
                <div className="flex justify-between flex-col">
                  <img src={googleplay} alt="" />
                  <img src={appstore} alt="" />
                </div>
              </div>
              <div className="mt-5 pr-32 text-[2.4rem] justify-between flex">
                <FaFacebookF />
                <CiTwitter />
                <CiInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full left-0 bottom-3 opacity-25">
        <hr className=" text-gray-800 mb-3" />
        <center className="text-[1.59984rem] font-[400] font-Poppis">
          &copy; Copyright Rimel 2022. All right reserved
        </center>
      </div>
    </footer>
  );
};

export default Footer;
