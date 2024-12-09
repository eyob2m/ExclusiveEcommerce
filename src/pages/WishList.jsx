/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import SectionIntro from "../components/SectionIntro";
import { NDiscountCard } from "../components/Cards";
import { useSelector } from "react-redux";

const WishList = () => {

    const [items, setitems] = useState([]);
    const wishlist = useSelector(state=>state.wishlist)
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
            <h1>Wishlist({wishlist.length})</h1>
            <button className="border px-20 py-5 border-black rounded-lg ">Move All To Bag</button>
          </div>
          
         <div className="flex flex-wrap w-full justify-center my-10">
         {wishlist.map((i) => {
              return (
                <NDiscountCard
                  key={i.id}
                  id={i.id}
                  image={i.image}
                  title={i.title}
                  price={i.price + 20}
                  netprice={i.price}
                  stars={i?.rating?.count}
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
