/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { AiFillStar} from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import SectionIntro from "../components/SectionIntro";

const WishList = () => {

    const NDiscountCard = ({ image, title, price, netprice, stars,wishlist }) => {
        return (
          <div className="item mx-6 flex flex-col h-[350px] w-[270px]">
            <div className="p-10 relative bg-[#F5F5F5] rounded-md">
              <div className="w-[190px] h-[180px]">
                <img className="object-contain w-full h-full" src={image} alt="" />
              </div>
    
              <div className="absolute  top-4 right-4 font-Poppis  text-black py-1 rounded-md px-3 font-[400] text-[1.2rem ]">
                <div className="w-[24px] h-[24px] bg-white rounded-full">
                {
                    wishlist ?  <MdDeleteOutline className="text-3xl" /> :<IoEyeOutline className="text-3xl" /> 
                }
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
     
      <div className="flex flex-col py-20 font-Poppis px-[100px] gap-28">
        <section>
          <div className="flex font-[400] items-center text-[2rem] justify-between">
            <h1>Wishlist(4)</h1>
            <button className="border px-20 py-5 border-black rounded-lg ">Move All To Bag</button>
          </div>
          
         <div className="flex flex-wrap w-full justify-center my-10">
         {items.map((i) => {
              return (
                <NDiscountCard
                  key={i.id}
                  image={i.image}
                  title={i.title}
                  price={i.price + 20}
                  netprice={i.price}
                  stars={i.rating.count}
                  wishlist={true}
                />
              );
            })}
         </div>
        </section>
        <SectionIntro title={"Just For You"} color={"#DB4444"} />
        <div className="flex flex-wrap w-full justify-center my-10">
         {items.map((i) => {
              return (
                <NDiscountCard
                  key={i.id}
                  image={i.image}
                  title={i.title}
                  price={i.price + 20}
                  netprice={i.price}
                  stars={i.rating.count}
                  wishlist={false}
                />
              );
            })}
         </div>
      </div>
   
    </div>
  );
};

export default WishList;
