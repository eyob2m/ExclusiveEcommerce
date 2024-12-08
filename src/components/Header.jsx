/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GrStarOutline } from "react-icons/gr";
import {
  IoBagHandleOutline,
  IoCartOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { RiProfileLine } from "react-icons/ri";
import { TiCancelOutline, TiHeartOutline, TiUserOutline } from "react-icons/ti";
import { Link } from "react-router-dom";



const Header = ({page}) => {

 
  const [loggedIn] = useState(false);
  const [profileMenu, setprofileMenu] = useState(false);
  
  return (
    <nav className="font-Inter  border-b border-b-gray-400   py-6 px-[100px] flex  items-center justify-between">
      <div className="flex justify-between gap-[190px]  items-center">
        <h1 className="text-[2.4rem] font-[700] cursor-pointer">Exclusive</h1>
        <ul className="flex gap-[48px] text-[1.6rem] font-Poppis font-[400]">
          <Link to={'/'}> <li  className={`${page=="home" && "before:w-full"} relative cursor-pointer before:absolute before:bottom-0 before:w-[0%] before:duration-200 hover:before:w-[100%] before:h-1 before:bg-gray-800`} >Home</li></Link>
          <Link to={'/contact'}> <li  className={`${page=="contact" && "before:w-full"} relative cursor-pointer before:absolute before:bottom-0 before:w-[0%] before:duration-200 hover:before:w-[100%] before:h-1 before:bg-gray-800`}>Contact</li></Link>
          <Link to={'/about'}> <li  className={`${page=="about" && "before:w-full"} relative cursor-pointer before:absolute before:bottom-0 before:w-[0%] before:duration-200 hover:before:w-[100%] before:h-1 before:bg-gray-800`}>About</li></Link>
          <Link to={'/signup'}> <li  className={`${page=="signup" && "before:w-full"} relative cursor-pointer before:absolute before:bottom-0 before:w-[0%] before:duration-200 hover:before:w-[100%] before:h-1 before:bg-gray-800`}>Sign up</li></Link>
        </ul>
      </div>
      <div className="flex items-center  gap-[24px] text-[2.4rem]">
        <div className="flex  items-center justify-start bg-[#F5F5F5] px-3 rounded-lg  py-3 border    border-tfa">
          <div>

            <input
              className="text-[1.59984rem] bg-transparent focus:border-none focus:outline-none"
              placeholder="What are you lokking for"
              type="text"
            />
          </div>
          <BiSearch />
        </div>

        <Link to={'/wishlist'}> <TiHeartOutline className="cursor-pointer" /></Link>
        <div className="relative cursor-pointer">
        <Link to={'/cart'}> <IoCartOutline className="cursor-pointer" /></Link> 
          {loggedIn && (
            <div className="w-[18px] h-[18px]  absolute   rounded-full text-white  -top-3 -right-3 flex items-center justify-center bg-red-500">
              <h2 className="text-[1.2rem] font-[400]">2</h2>
            </div>
          )}
        </div>
        {loggedIn && (
          <div className="relative">
            <RiProfileLine className="cursor-pointer"
              onClick={() => {
                setprofileMenu(!profileMenu);
              }}
            />
            {profileMenu && (
              <div className="z-20 p-6 text-nowrap text-[1.4rem] font-[400] font-Poppis bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg absolute text-xl -bottom-8 translate-y-[100%] right-[50%]">
                <ul className="flex flex-col gap-6 text-tfa">
                  <li  className="cursor-pointer hover:opacity-45 duration-300 flex text-[1.4rem] gap-4 items-center">
        
                    <TiUserOutline className="text-[2.4rem]" />{" "}
                    <Link to={'/account'}>  <p>Manage My Account</p> </Link>
                  </li>
                  <li  className="cursor-pointer hover:opacity-45 duration-300 flex text-[1.4rem] gap-4 items-center">
        
                    <IoBagHandleOutline className="text-[2.4rem]" />{" "}
                    <Link to={'/cart'}> <p>My Order</p> </Link>
                  </li>
                  <li  className="cursor-pointer hover:opacity-45 duration-300 flex text-[1.4rem] gap-4 items-center">
        
                    <TiCancelOutline className="text-[2.4rem]" />{" "}
                    <p>My Cancellations</p>
                  </li>
                  <li  className="cursor-pointer hover:opacity-45 duration-300 flex text-[1.4rem] gap-4 items-center">
        
                    <GrStarOutline className="text-[2.4rem]" />{" "}
                    <p>My Reviews</p>
                  </li>
                  <li  className="cursor-pointer hover:opacity-45 duration-300 flex text-[1.4rem] gap-4 items-center">
        
                    <IoLogOutOutline className="text-[2.4rem]" /> <p>Logout</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
