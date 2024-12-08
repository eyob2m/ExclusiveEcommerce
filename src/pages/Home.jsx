/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { GrNext } from "react-icons/gr";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PreHeader from "../components/PreHeader";
import iphone from "../assets/1200px-Apple_gray_logo 1.png";
import prom from "../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
import camera from "../icons/Category-Camera.png";
import cellp from "../icons/Category-CellPhone.png";
import gamepad from "../icons/Category-Gamepad.png";
import hphone from "../icons/Category-Headphone.png";
import watch from "../icons/Category-SmartWatch.png";
import comp from "../icons/Category-Computer.png";

import deliv from "../assets/icon-delivery (1).png";
import custserv from "../assets/Icon-Customer service.png";
import secure from "../icons/Icon-secure.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionIntro from "../components/SectionIntro";
import Countdown from "react-countdown";
import { useEffect, useState } from "react";

const Home = () => {
  // const cats = [
  //   { img: cellp, title: "Phones" },
  //   { img: comp, title: "Computers" },
  //   { img: watch, title: "SmartWatch" },
  //   { img: camera, title: "Camera" },
  //   { img: hphone, title: "HeadPhone" },
  //   { img: gamepad, title: "Gamepad" },
  // ];
  const [items, setitems] = useState([]);
  const [cats, setcats] = useState([]);
  const [catsitem, setcatsitem] = useState([]);

  const [selectedCat, setselectedCat] = useState("Phones");
  useEffect(() => {
    const ft = async () => {
      const res = await fetch("https://fakestoreapi.com/products");

      const data = await res.json();
      await setitems(data);
      const rescat = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      const resdata = await rescat.json();
      console.log(resdata);
      await setcats(resdata);
    };
    ft();
  }, []);
  const CateList = ({ c }) => {
    return (
      <div
        onClick={() =>featchByCat(c) }
        className={`${
          selectedCat == c
            ? "bg-[#DB4444] text-white border-none"
            : ""
        } cursor-default flex-1 flex justify-center py-6 rounded-lg border border-gray-600 `}
      >
        <h2 className="font-Poppis font-[400] text-[1.6rem]">{c}</h2>
      </div>
    );
  };
  const MainCard = ({ discount, image, title, price, netprice, stars }) => {
    return (
      <div className="item mx-6 flex flex-col h-[350px] w-[270px]">
        <div className="p-10 relative bg-[#F5F5F5] rounded-md">
          <div className="w-[190px] h-[180px]">
            <img className="object-contain w-full h-full" src={image} alt="" />
          </div>
          <div className="absolute top-4 left-4 font-Poppis bg-[#DB4444] text-white py-1 rounded-md px-3 font-[400] text-[1.2rem ]">
            {" "}
            {discount}
          </div>
          <div className="absolute  top-4 right-4 font-Poppis  text-black py-1 rounded-md px-3 font-[400] text-[1.2rem ]">
            <div className="w-[24px] h-[24px] bg-white rounded-full">
              <AiOutlineHeart className="text-3xl" />
            </div>
            <div className="w-[24px] h-[24px] bg-white rounded-full">
              <AiOutlineEye className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="flex font-Poppis flex-col gap-2">
          <h1 className="font-Poppis font-[500] text-[1.6rem]">{title}</h1>
          <div className="flex gap-[12px] text-[1.6rem] ">
            <h1 className="text-[#DB4444]">{netprice}</h1>{" "}
            <span className="text-[#000000] opacity-50 line-through">
              {price}
            </span>
          </div>
          <div className="flex gap-[12px] items-center text-[1.6rem] ">
            <div className="flex gap-1">
              <AiFillStar className="text-[#FFAD33]" />
              <AiFillStar className="text-[#FFAD33]" />
              <AiFillStar className="text-[#FFAD33]" />
              <AiFillStar className="text-[#FFAD33]" />
            </div>{" "}
            <span className="text-[#000000] text-[1.4rem] opacity-70">
              ({stars})
            </span>
          </div>
        </div>
      </div>
    );
  };
  const WCartCard = ({ stat, image, title, price, netprice, stars }) => {
    return (
      <div className="item mx-6 flex flex-col h-[350px] w-[270px]">
        <div className="p-10 relative bg-[#F5F5F5] rounded-md">
          <div className="w-[190px] h-[180px]">
            <img className="object-contain w-full h-full" src={image} alt="" />
          </div>
          <div className="absolute top-4 left-4 font-Poppis bg-[#00FF66] text-white py-1 rounded-md px-3 font-[400] text-[1.2rem ]">
            {" "}
            {stat}
          </div>
          <div className="absolute  top-4 right-4 font-Poppis  text-black py-1 rounded-md px-3 font-[400] text-[1.2rem ]">
            <div className="w-[24px] h-[24px] bg-white rounded-full">
              <AiOutlineHeart className="text-3xl" />
            </div>
            <div className="w-[24px] h-[24px] bg-white rounded-full">
              <AiOutlineEye className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="flex font-Poppis flex-col gap-2">
          <h1 className="font-Poppis font-[500] text-[1.6rem]">{title}</h1>
          <div className="flex gap-[12px] text-[1.6rem] ">
            <h1 className="text-[#DB4444]">{netprice}</h1>{" "}
            <span className="text-[#000000] opacity-50 line-through">
              {price}
            </span>
          </div>
          <div className="flex gap-[12px] items-center text-[1.6rem] ">
            <div className="flex gap-1">
              <AiFillStar className="text-[#FFAD33]" />
              <AiFillStar className="text-[#FFAD33]" />
              <AiFillStar className="text-[#FFAD33]" />
              <AiFillStar className="text-[#FFAD33]" />
            </div>{" "}
            <span className="text-[#000000] text-[1.4rem] opacity-70">
              ({stars})
            </span>
          </div>
        </div>
      </div>
    );
  };
  const NDiscountCard = ({ image, title, price, netprice, stars }) => {
    return (
      <div className="item mx-6 flex flex-col h-[350px] w-[270px]">
        <div className="p-10 relative bg-[#F5F5F5] rounded-md">
          <div className="w-[190px] h-[180px]">
            <img className="object-contain w-full h-full" src={image} alt="" />
          </div>

          <div className="absolute  top-4 right-4 font-Poppis  text-black py-1 rounded-md px-3 font-[400] text-[1.2rem ]">
            <div className="w-[24px] h-[24px] bg-white rounded-full">
              <AiOutlineHeart className="text-3xl" />
            </div>
            <div className="w-[24px] h-[24px] bg-white rounded-full">
              <AiOutlineEye className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="flex font-Poppis flex-col gap-2">
          <h1 className="font-Poppis font-[500] text-[1.6rem]">{title}</h1>
          <div className="flex gap-[12px] text-[1.6rem] ">
            <h1 className="text-[#DB4444]">{netprice}</h1>{" "}
            <span className="text-[#000000] opacity-50 line-through">
              {price}
            </span>
          </div>
          <div className="flex gap-[12px] items-center text-[1.6rem] ">
            <div className="flex gap-1">
              <AiFillStar className="text-[#FFAD33]" />
              <AiFillStar className="text-[#FFAD33]" />
              <AiFillStar className="text-[#FFAD33]" />
              <AiFillStar className="text-[#FFAD33]" />
            </div>{" "}
            <span className="text-[#000000] text-[1.4rem] opacity-70">
              ({stars})
            </span>
          </div>
        </div>
      </div>
    );
  };

  const featchByCat = async (c)=>{
    await setselectedCat(c)
    const rescatd = await fetch(
      `https://fakestoreapi.com/products/category/${c}`
    );

    const catdatadata = await rescatd.json();
    console.log(catdatadata);
    await setcatsitem(catdatadata);
  }
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex gap-3">
        <div className="flex gap-2">
          <div className="flex items-center flex-col">
            <h4 className="font-Poppis font-[500] text-[1.2rem]">Days</h4>
            <h1 className="font-Inter font-[700] text-[3.2rem] ">{days}</h1>
          </div>
          <h3 className="font-Inter text-[#E07575] self-end font-[7400] text-[3.2rem]">
            :
          </h3>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center flex-col">
            <h4 className="font-Poppis font-[500] text-[1.2rem]">Hours</h4>
            <h1 className="font-Inter font-[700] text-[3.2rem] ">{hours}</h1>
          </div>
          <h3 className="font-Inter text-[#E07575] self-end font-[7400] text-[3.2rem]">
            :
          </h3>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center flex-col">
            <h4 className="font-Poppis font-[500] text-[1.2rem]">Minutes</h4>
            <h1 className="font-Inter font-[700] text-[3.2rem] ">{minutes}</h1>
          </div>
          <h3 className="font-Inter text-[#E07575] self-end font-[7400] text-[3.2rem]">
            :
          </h3>
        </div>{" "}
        <div className="flex gap-2">
          <div className="flex items-center flex-col">
            <h4 className="font-Poppis font-[500] text-[1.2rem]">Seconds</h4>
            <h1 className="font-Inter font-[700] text-[3.2rem] ">{seconds}</h1>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <PreHeader />

      <Header />
      <div className="flex flex-col px-[100px] gap-28">
        <section>
          <div className="flex mb-20 font-Poppis    pb-6   items-start justify-between">
            <div>
              <ul className="font-[400]  text-nowrap pr-20 border-r border-[#000000] border-opacity-40 pt-20  text-[1.6rem] flex flex-col gap-4">
                <li className="flex items-center">
                  Woman&apos;s Fashion <GrNext />
                </li>
                <li className="flex items-center">
                  Men&apos;s Fashion <GrNext />
                </li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby&apos;s & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
              </ul>
            </div>
            <hr className="h-[100%] w-1 bg-black" />
            <div className="w-[90%] px-40 pt-20 ">
              <Slider dots autoplay autoplaySpeed={2000} slidesToScroll={1}>
                <div className="h-[284px] bg-[url(assets/hero_endframe__cvklg0xk3w6e_large%202.png)] bg-right bg-no-repeat bg-black bg-blend-difference relative w-[570px] py-20 pb-0 ">
                  <div className="absolute w-[50%] flex flex-col gap-4  bottom-8 font-Inter text-white left-20">
                    <div className="flex items-center gap-5">
                      <img src={iphone} alt="" />{" "}
                      <h1 className="font-[400] text-[2.4rem]">
                        iPhone 14 Series
                      </h1>
                    </div>
                    <h1 className="font-[600] text-[4.8rem]">
                      Up to 10% off Voucher{" "}
                    </h1>
                    <h3 className="font-[500] font-Poppis underline text-[1.6rem]">
                      Shop Now
                    </h3>
                  </div>
                </div>{" "}
                <div className="h-[284px] bg-[url(assets/hero_endframe__cvklg0xk3w6e_large%202.png)] bg-right bg-no-repeat bg-black bg-blend-difference relative w-[570px] py-20 pb-0 ">
                  <div className="absolute w-[50%] flex flex-col gap-4  bottom-8 font-Inter text-white left-20">
                    <div className="flex items-center gap-5">
                      <img src={iphone} alt="" />{" "}
                      <h1 className="font-[400] text-[2.4rem]">
                        iPhone 14 Series
                      </h1>
                    </div>
                    <h1 className="font-[600] text-[4.8rem]">
                      Up to 10% off Voucher{" "}
                    </h1>
                    <h3 className="font-[500] font-Poppis underline text-[1.6rem]">
                      Shop Now
                    </h3>
                  </div>
                </div>{" "}
                <div className="h-[284px] bg-[url(assets/hero_endframe__cvklg0xk3w6e_large%202.png)] bg-right bg-no-repeat bg-black bg-blend-difference relative w-[570px] py-20 pb-0 ">
                  <div className="absolute w-[50%] flex flex-col gap-4  bottom-8 font-Inter text-white left-20">
                    <div className="flex items-center gap-5">
                      <img src={iphone} alt="" />{" "}
                      <h1 className="font-[400] text-[2.4rem]">
                        iPhone 14 Series
                      </h1>
                    </div>
                    <h1 className="font-[600] text-[4.8rem]">
                      Up to 10% off Voucher{" "}
                    </h1>
                    <h3 className="font-[500] font-Poppis underline text-[1.6rem]">
                      Shop Now
                    </h3>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        <section>
          <SectionIntro color={"#DB4444"} title={"Today's"} />
          <div>
            <div className="flex items-end gap-40  mb-10">
              <h1 className="font-Inter font-[600]  text-[3.6rem]">
                Flash Sales
              </h1>
              <Countdown date={Date.now() + 0} renderer={renderer} />
            </div>
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
            <center>
              {" "}
              <button className="bg-[#DB4444] my-10 text-tfa text-[1.5rem] rounded-lg py-4 w-fit px-10">
                View All Products
              </button>
            </center>
          </div>
        </section>
        <section>
          <SectionIntro title={"Categories"} color={"#DB4444"} />
          <div className="flex items-end gap-40  mb-10">
            <h1 className="font-Inter font-[600]  text-[3.6rem]">
              Browser By Category
            </h1>
          </div>
          <div className="flex gap-6 w-full justify-between mb-20">
            {cats.map((c) => {
              return <CateList key={c} c={c} />;
            })}
          </div>
          <Slider variableWidth slidesToScroll={1}>
            {catsitem.map((i) => {
              return (
                <NDiscountCard
                  key={i.id}
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
        <section>
          <div className="flex items-center gap-[16px]">
            <div className={`w-[20px] h-[40px] rounded-lg bg-[#00FF66]`}></div>
            <h1
              className={`font-Poppis font-[600] text-[1.6rem] text-[#00FF66]`}
            >
              Available
            </h1>
          </div>
          <div className="flex justify-between pr-52">
            <div className="flex items-end gap-40  mb-10">
              <h1 className="font-Inter font-[600]  text-[3.6rem]">
                All Products
              </h1>
            </div>
            <button className="bg-[#DB4444] my-10 text-tfa text-[1.5rem] rounded-lg py-4 w-fit px-10">
              View All
            </button>
          </div>
          <Slider variableWidth slidesToScroll={1}>
            {items.map((i) => {
              return (
                <NDiscountCard
                  key={i.id}
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
        <section>
          <div className="flex px-32 py-20 bg-[#000000] items-center w-[1170px] h-[400px] text-white">
            <div className="flex flex-col justify-between">
              <h2 className="text-[#47B486] font-Poppis font-[600] text-[1.6rem]">
                Categories
              </h2>
              <h1 className=" font-Inter font-[600] text-[4.8rem]">
                Enhance Your Music Experience
              </h1>
              <div className="flex gap-6">
                <div className="flex h-[62px] w-[62px] flex-col font-Poppis font-[400] text-[1.1rem] justify-center items-center bg-white text-black rounded-full p-3">
                  <h1 className="font-[600]">23</h1>
                  <h2>Hours</h2>
                </div>
                <div className="flex h-[62px] w-[62px] flex-col font-Poppis font-[400] text-[1.1rem] justify-center items-center bg-white text-black rounded-full p-3">
                  <h1 className="font-[600]">05</h1>
                  <h2>Days</h2>
                </div>
                <div className="flex h-[62px] w-[62px] flex-col font-Poppis font-[400] text-[1.1rem] justify-center items-center bg-white text-black rounded-full p-3">
                  <h1 className="font-[600]">59</h1>
                  <h2>Minutes</h2>
                </div>
                <div className="flex h-[62px] w-[62px] flex-col font-Poppis font-[400] text-[1.1rem] justify-center items-center bg-white text-black rounded-full p-3">
                  <h1 className="font-[600]">35</h1>
                  <h2>Seconds</h2>
                </div>
              </div>
              <button className="bg-[#00FF66] my-10 text-tfa text-[1.5rem] rounded-lg py-4 w-fit px-10">
                Buy Now!
              </button>
            </div>
            <div>
              <img src={prom} alt="" />
            </div>
          </div>
        </section>
        <section>
          <SectionIntro title={"Our Products"} color={"#DB4444"} />
          <div>
            <h1 className="font-Inter font-[600]  text-[3.6rem]">
              Browser By Category
            </h1>
            <div className="flex flex-col gap-10 mt-20">
              <Slider variableWidth slidesToScroll={1}>
                {items.map((i) => {
                  return (
                    <WCartCard
                      key={i.id}
                      stat={"New"}
                      image={i.image}
                      title={i.title}
                      price={i.price + 20}
                      netprice={i.price}
                      stars={i.rating.count}
                    />
                  );
                })}
              </Slider>{" "}
              <Slider variableWidth slidesToScroll={1}>
                {items.map((i) => {
                  return (
                    <WCartCard
                      key={i.id}
                      stat={"New"}
                      image={i.image}
                      title={i.title}
                      price={i.price + 20}
                      netprice={i.price}
                      stars={i.rating.count}
                    />
                  );
                })}
              </Slider>
            </div>
            <center>
              {" "}
              <button className="bg-[#DB4444] my-10 text-tfa text-[1.5rem] rounded-lg py-4 w-fit px-10">
                View All Products
              </button>
            </center>
          </div>
        </section>
        <section>
          <SectionIntro title={"Featured"} color={"#DB4444"} />
          <div className="mb-20">
            <h1 className="font-Inter font-[600]  text-[3.6rem]">
              New Arrival
            </h1>
          </div>
          <div className="flex h-[600px]   gap-10">
            <div className="h-[600px] bg-no-repeat bg-center bg-[url(assets/ps5-slim-goedkope-playstation_large%201.png)] bg-black bg-blend-difference relative w-[570px] py-20 pb-0 ">
              <div className="absolute w-[40%] flex flex-col gap-8  bottom-8 font-Inter text-white left-20">
                <h1 className="font-[600] text-[2.4rem]">PlayStation 5</h1>
                <h2 className="font-[400] text-[1.4rem]">
                  Black and White version of the PS5 coming out on sale.
                </h2>
                <h3 className="font-[500] font-Poppis underline text-[1.6rem]">
                  Shop Now
                </h3>
              </div>
            </div>
            <div className="flex justify-between flex-col">
              <div className="h-[284px] bg-[url(icons/attractive-woman-wearing-hat-posing-black-background%201.png)] bg-black bg-blend-difference relative w-[570px] py-20 pb-0 ">
                <div className="absolute w-[50%] flex flex-col gap-8  bottom-8 font-Inter text-white left-20">
                  <h1 className="font-[600] text-[2.4rem]">
                    Women’s Collections
                  </h1>
                  <h2 className="font-[400] text-[1.4rem]">
                    Featured woman collections that give you another vibe..
                  </h2>
                  <h3 className="font-[500] font-Poppis underline text-[1.6rem]">
                    Shop Now
                  </h3>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="h-[284px] bg-[url(icons/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png%201.png)] bg-no-repeat bg-center bg-black bg-blend-difference relative w-[270px] py-20 pb-0 ">
                  <div className="absolute w-[70%] flex flex-col gap-8  bottom-8 font-Inter text-white left-10">
                    <h1 className="font-[600] text-[2.4rem]">Speakers</h1>
                    <h2 className="font-[400] text-[1.4rem]">
                      Amazon wireless speakers
                    </h2>
                    <h3 className="font-[500] font-Poppis underline text-[1.6rem]">
                      Shop Now
                    </h3>
                  </div>
                </div>
                <div className="h-[284px] bg-[url(icons/652e82cd70aa6522dd785109a455904c.png)] bg-black bg-no-repeat bg-center bg-blend-difference relative w-[270px] py-20 pb-0 ">
                  <div className="absolute w-[70%] flex flex-col gap-8  bottom-8 font-Inter text-white left-10">
                    <h1 className="font-[600] text-[2.4rem]">Perfume</h1>
                    <h2 className="font-[400] text-[1.4rem]">
                      GUCCI INTENSE OUD EDP
                    </h2>
                    <h3 className="font-[500] font-Poppis underline text-[1.6rem]">
                      Shop Now
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 mb-32">
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

export default Home;
