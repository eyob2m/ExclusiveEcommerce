import Footer from "../components/Footer";
import Header from "../components/Header";
import PreHeader from "../components/PreHeader";
import deliv from "../assets/icon-delivery (1).png";
import custserv from "../assets/Icon-Customer service.png";
import secure from "../icons/Icon-secure.png";
import group from "../icons/Group.png";
import shopb from "../icons/Icon-Shopping bag.png";
import sale from "../icons/Icon-Sale (1).png";
import shop from "../icons/icon_shop.png";
import tom from "../icons/Frame 874.png";
import emma from "../icons/image 51.png";
import will from "../icons/image 47.png";

import heroimg from "../icons/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png";

import { RiInstagramLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import Slider from "react-slick";
const About = () => {
  return (
    <div>
      <PreHeader />

      <Header />
      <div className="flex  font-[400] font-Poppis flex-col py-20 mb-10 gap-40">
        <div className="flex gap-3 px-[100px]   text-[1.4rem]">
          <p className="opacity-75"> Home / </p>
          <span> About</span>
        </div>

        <section className="-mt-32">
          <div className="flex font-Inter pl-[100px] gap-14 justify-between">
            <div className="font-[400] justify-center flex gap-6  flex-col text-[1.6rem] w-[40%]">
            
              <h1 className="font-[600] text-[5.4rem]">Our Story</h1> 
              <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p><div></div>
           <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p> </div>
            <div className=" h-[600px]  w-[60%]">
              <img className="object-cover" src={heroimg} alt="" />
            </div>
          </div>
        </section>
        <section className="px-[100px] ">
                <div className="flex gap-10">
                    
        <div className="flex w-full p-8 rounded-lg border border-gray-600 flex-col">
        <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-[80px] h-[80px] flex justify-center p-4 items-center bg-gray-500 rounded-full">
                <div className="bg-black flex justify-center w-full h-full items-center rounded-full">
                  <img src={shop} alt="" />
                </div>
              </div>
              <h1 className="font-Poppis font-[600] text-[2rem]">
                10.5k
              </h1>
              <h2 className="font-Poppis font-[400] text-[1.4rem]">
              Sallers active our site
              </h2>
            </div>
        </div>
        <div className="flex w-full p-8 rounded-lg border text-white bg-[#DB4444] flex-col">
        <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-[80px] h-[80px] flex justify-center p-4 items-center bg-gray-300 rounded-full">
                <div className="bg-white flex justify-center w-full h-full items-center rounded-full">
                  <img src={sale} alt="" />
                </div>
              </div>
              <h1 className="font-Poppis font-[600] text-[2rem]">
              33k
              </h1>
              <h2 className="font-Poppis font-[400] text-[1.4rem]">
              Mopnthly Produduct Sale
              </h2>
            </div>
        </div><div className="flex w-full p-8 rounded-lg border border-gray-600 flex-col">
        <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-[80px] h-[80px] flex justify-center p-4 items-center bg-gray-500 rounded-full">
                <div className="bg-black flex justify-center w-full h-full items-center rounded-full">
                  <img src={shopb} alt="" />
                </div>
              </div>
              <h1 className="font-Poppis font-[600] text-[2rem]">
                45.5k
              </h1>
              <h2 className="font-Poppis font-[400] text-[1.4rem]">
              Customer active in our site
              </h2>
            </div>
        </div><div className="flex w-full p-8 rounded-lg border border-gray-600 flex-col">
        <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-[80px] h-[80px] flex justify-center p-4 items-center bg-gray-500 rounded-full">
                <div className="bg-black flex justify-center w-full h-full items-center rounded-full">
                  <img src={group} alt="" />
                </div>
              </div>
              <h1 className="font-Poppis font-[600] text-[2rem]">
              25k
              </h1>
              <h2 className="font-Poppis font-[400] text-[1.4rem]">
              Anual gross sale in our site
              </h2>
            </div>
        </div>
                </div>
        </section>
        <section className="px-[100px]">
            <div>
              <Slider slidesToShow={3}>
              <div>
                  <div className="h-[230px] rounded-md mr-20 flex items-center justify-center bg-[#F5F5F5]">
                  <img className="h-full" src={tom} alt="" />
                  </div>
                  <div className="flex  font-Poppis flex-col">
<h1 className="font-[500] text-[3.2rem]">Tom Cruise</h1>
<h2 className="font-[400] text-[1.6rem]">Founder and Cahirman</h2>
<div className="flex w-[25%] justify-between mt-6">
    <RiTwitterLine size={"20px"}/>
    <RiInstagramLine size={"20px"}/>
    <RiLinkedinLine size={"20px"}/> 
</div>
                  </div>
                </div>
                <div>
                  <div className="h-[230px] mr-20 flex items-center justify-center rounded-md bg-[#F5F5F5]">
                  <img className="h-full" src={emma} alt="" />
                  </div>
                  <div className="flex font-Poppis flex-col">
<h1 className="font-[500] text-[3.2rem]">Emma Watson</h1>
<h2 className="font-[400] text-[1.6rem]">Managing Director</h2>
<div className="flex w-[25%] justify-between mt-6">
    <RiTwitterLine size={"20px"}/>
    <RiInstagramLine size={"20px"}/>
    <RiLinkedinLine size={"20px"}/> 
</div>
                  </div>
                </div>
                <div>
                  <div className="h-[230px] flex  items-center justify-center rounded-md bg-[#F5F5F5]">
                  <img className="h-full" src={will} alt="" />
                  </div>
                  <div className="flex font-Poppis flex-col">
<h1 className="font-[500] text-[3.2rem]">Will Smith</h1>
<h2 className="font-[400] text-[1.6rem]">Product Designer</h2>
<div className="flex w-[25%] justify-between mt-6">
    <RiTwitterLine size={"20px"}/>
    <RiInstagramLine size={"20px"}/>
    <RiLinkedinLine size={"20px"}/> 
</div>
                  </div>
                </div>
              </Slider>
            </div>
        </section>
        <section className="mt-10 px-[100px] mb-32">
          <div className="flex justify-between px-32">
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-[80px] h-[80px] flex justify-center p-4 items-center bg-gray-500 rounded-full">
                <div className="bg-black flex justify-center w-full h-full items-center rounded-full">
                  <img src={deliv} alt="" />
                </div>
              </div>
              <h1 className="font-Poppis font-[600] text-[2rem]">
                FREE AND FAST DELIVERY
              </h1>
              <h2 className="font-Poppis font-[400] text-[1.4rem]">
                Free delivery for all orders over $140
              </h2>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-[80px] h-[80px] flex justify-center p-4 items-center bg-gray-500 rounded-full">
                <div className="bg-black flex justify-center w-full h-full items-center rounded-full">
                  <img src={custserv} alt="" />
                </div>
              </div>
              <h1 className="font-Poppis font-[600] text-[2rem]">
                24/7 CUSTOMER SERVICE
              </h1>
              <h2 className="font-Poppis font-[400] text-[1.4rem]">
                Friendly 24/7 customer support
              </h2>
            </div>{" "}
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-[80px] h-[80px] flex justify-center p-4 items-center bg-gray-500 rounded-full">
                <div className="bg-black flex justify-center w-full h-full items-center rounded-full">
                  <img src={secure} alt="" />
                </div>
              </div>
              <h1 className="font-Poppis font-[600] text-[2rem]">
                MONEY BACK GUARANTEE
              </h1>
              <h2 className="font-Poppis font-[400] text-[1.4rem]">
                We reurn money within 30 days
              </h2>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
