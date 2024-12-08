/* eslint-disable react/prop-types */
import { GiRecycle } from "react-icons/gi"; 

import main from "../icons/image 63.png";
import i1 from "../icons/image 57.png";
import i2 from "../icons/image 58.png";
import i3 from "../icons/image 61.png";
import i4 from "../icons/image 59.png";
import { BsStarFill } from "react-icons/bs";
import { TiHeartOutline } from "react-icons/ti";
import { GrDeliver } from "react-icons/gr";
import SectionIntro from "../components/SectionIntro";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { MainCard } from "../components/Cards";

const ProductDetail = () => {
  
    const [items, setitems] = useState([]);

    useEffect(() => {
        const ft = async () => {
          const res = await fetch("https://fakestoreapi.com/products");
    
          const data = await res.json();
          await setitems(data);
         
        };
        ft();
      }, []);
  return (
    <div>
     
      <div className="flex  font-[400] font-Poppis flex-col py-20 px-[100px] mb-10 gap-28">
        <div className="flex gap-3 text-[1.4rem]">
          <p className="opacity-75"> Home / Gaming /</p>
          <span> Havic HV G-92 Gamepad</span>
        </div>

        <section>
          <div>
            <div className="flex gap-10">
              <div id="image" className="flex gap-8">
                <div className="flex">
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#F5F5F5] w-[170px] h-[138px] p-8 rounded-md">
                      <img src={i1} alt="" />
                    </div>
                    <div className="bg-[#F5F5F5] w-[170px] h-[138px] p-8 rounded-md">
                      <img src={i2} alt="" />
                    </div>{" "}
                    <div className="bg-[#F5F5F5] w-[170px] h-[138px] p-8 rounded-md">
                      <img src={i3} alt="" />
                    </div>{" "}
                    <div className="bg-[#F5F5F5] w-[170px] h-[138px] p-8 rounded-md">
                      <img src={i4} alt="" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#F5F5F5] p-20 w-[500px] h-[600px] rounded-md">
                  <img src={main} alt="" />
                </div>
              </div>
              <div className="flex gap-5  justify-between flex-col">
                <div className="flex flex-col gap-4" id="title">
                  <h1 className="text-[2.4rem]  font-Inter font-[600]">Havic HV G-92 Gamepad</h1>
                  <div className="flex gap-6">
                    <div className="flex gap-2">
                      {" "}
                      <BsStarFill size={"15px"} className="text-yellow-300" />{" "}
                      <BsStarFill size={"15px"} className="text-yellow-300" />{" "}
                      <BsStarFill size={"15px"} className="text-yellow-300" />{" "}
                      <BsStarFill size={"15px"} className="text-yellow-300" />
                    </div>
                    <h1 className="font-Poppis font-[400] text-[1.4rem]">(150 Reviews)</h1>
                    <h1 className="font-Poppis font-[400] text-[1.4rem] text-[#00FF66]">IN Stock</h1>
                  </div>
                  <h1 className="font-Inter font-[400] text-[2.4rem]">$192.00</h1>
                  <p className="font-Poppis font-[400] text-[1.4rem]">
                    PlayStation 5 Controller Skin High quality vinyl with air
                    channel adhesive for easy bubble free install & mess free
                    removal Pressure sensitive.
                  </p>
                </div>
                <div id="color" className="flex gap-8">
                  <h1 className="font-[400] text-[2rem] text-[#1E1E1E] font-Inter">
                    Color:
                  </h1>
                  <div className="flex items-center justify-center gap-2">
                    <div className="border-2 border-solid rounded-full p-1 border-gray-500 ">
                      <div className="w-[20px] h-[20px] rounded-full  bg-[#FF4646]"></div>
                    </div>
                    <div className="rounded-full p-1 border-gray-500 ">
                      <div className="w-[20px] h-[20px] rounded-full  bg-[#242425]"></div>
                    </div>
                  </div>
                </div>

                <div id="size" className="flex  items-center gap-3">
                  <h1 className="font-[400] text-[2rem] font-Inter text-[#1E1E1E]">
                    Size:
                  </h1>
                  <div className="flex items-center gap-3 ">
                    <h1 className="px-3 py-1 border-solid  border-gray-400 border-2  rounded-lg text-[#222222 font-[500] text-[1.6rem] ]">
                      XS
                    </h1>
                    <h1 className="px-3 py-1 border-solid  border-gray-400 border-2  rounded-lg text-[#222222 font-[500] text-[1.6rem] ]">
                      S
                    </h1>
                    <h1 className="px-3 py-1 border-solid  border-gray-400 border-2  rounded-lg text-[#222222 font-[500] text-[1.6rem] ]">
                      M
                    </h1>
                    <h1 className="px-3 py-1 border-solid  border-gray-400 border-2  rounded-lg text-[#222222 font-[500] text-[1.6rem] ]">
                      L
                    </h1>
                    <h1 className="px-3 py-1 border-solid  border-gray-400 border-2  rounded-lg text-[#222222 font-[500] text-[1.6rem] ]">
                      XL
                    </h1>
                  </div>{" "}
                </div>
                <div className="flex  gap-7">
                  <div
                    id="qantity"
                    className="flex  w-[35%] items-center  gap-4"
                  >
                   
                    <div className="flex rounded-md border-solid items-center text-white  border w-full border-black">
                      <button className="bg-[#DB4444]  text-[2rem] flex-1">-</button>
                      <h2 className="flex-1 text-black text-[2rem] text-center">1</h2>
                      <button className="bg-[#DB4444] text-[2rem]  flex-1 ">+</button>
                    </div>
                  </div>
                  <button className=" bg-[#DB4444] text-[1.6rem] text-tfa py-4 w-fit px-4 rounded-lg">
                    Buy Now
                  </button>
                  <div className="text-black border flex justify-center items-center border-gray-700 rounded-md w-[40px] h-[40px]">
                    <TiHeartOutline size={"25px"} />
                  </div>
                </div>
                <div>
            <div className="flex flex-col border border-black w-fit p-2  rounded-xl">
                        <div className="flex gap-6 p-5 items-center ">
                            <GrDeliver size={"20px"} />
                            <div className="flex gap-3  flex-col">
                                <h1 className="font-Poppis font-[500] text-[1.6rem]">Free Delivery</h1>
                                <h2 className="font-Poppis font-[500] text-[1.2rem]">Enter your postal code for Delivery Availability</h2>
                                </div>  
                        </div>
                        <hr className="h-[2px] opacity-70 bg-black"/>
                        <div className="flex gap-6 p-5 items-center ">
                          
                   <GiRecycle  size={"20px"}/>         <div className="flex gap-3 flex-col">
                                <h1 className="font-Poppis font-[500] text-[1.6rem]">Return Delivery</h1>
                                <h2 className="font-Poppis font-[500] text-[1.2rem]">Free 30 Days Delivery Returns. Details</h2>
                                </div>  
                        </div>
            </div>
        </div>
              </div>
              
            </div>

          </div>
        </section>
        <section>
        <SectionIntro color={"#DB4444"} title={"Related Item"} />
        <div className="mt-20"></div>
        <Slider variableWidth slidesToScroll={1}>
              {items.map((i) => {
                return (
                  <MainCard
                    key={i.id}
                    discount={Math.floor(Math.random() * 101) + "%"}
                    image={i.image}
                    title={i.title}
                    price={i.price + 20}
                    netprice={i.price}
                    stars={i.rating.count}
                  />
                );
              })}
            </Slider>
        </section>
      </div>
   
    </div>
  );
};

export default ProductDetail;
