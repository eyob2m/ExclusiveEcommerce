// import { AiFillStar, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";

// const ProductCard = ({ stat, image,likeicon,viewicon,liked,deleteicon, title, price, netprice, star,coloricon,colors, count }) => {

//         return (
//           <div className="item mx-6 flex flex-col h-[350px] w-[270px]">
//             <div className="p-10 relative bg-[#F5F5F5] rounded-md">
//               <div className={`${image ? "w-[190px] h-[180px]" : "hidden"}`}>
//                 <img className="object-contain w-full h-full" src={image} alt="" />
//               </div>
//               <div className={` ${stat ? "absolute top-4 left-4 font-Poppis bg-[#DB4444] text-white py-1 rounded-md px-3 font-[400] text-[1.2rem ]" : "hidden"}`}>
                
//                 {stat}
//               </div>
//               <div className="absolute  top-4 right-4 font-Poppis  text-black py-1 rounded-md px-3 font-[400] text-[1.2rem ]">
//                 <div className="w-[24px] h-[24px] bg-white rounded-full">
//                   <AiOutlineHeart className="text-3xl" />
//                 </div>
//                 <div className="w-[24px] h-[24px] bg-white rounded-full">
//                   <AiOutlineEye className="text-3xl" />
//                 </div>
//               </div>
//             </div>
//             <div className="flex font-Poppis flex-col gap-2">
//               <h1 className="font-Poppis font-[500] text-[1.6rem]">{title}</h1>
//               <div className="flex gap-[12px] text-[1.6rem] ">
//                 <h1 className="text-[#DB4444]">{netprice}</h1>{" "}
//                 <span className="text-[#000000] opacity-50 line-through">
//                   {price}
//                 </span>
//               </div>
//               <div className="flex gap-[12px] items-center text-[1.6rem] ">
//                 <div className="flex gap-1">
//                   <AiFillStar className="text-[#FFAD33]" />
//                   <AiFillStar className="text-[#FFAD33]" />
//                   <AiFillStar className="text-[#FFAD33]" />
//                   <AiFillStar className="text-[#FFAD33]" />
//                 </div>{" "}
//                 <span className="text-[#000000] text-[1.4rem] opacity-70">
//                   ({stars})
//                 </span>
//               </div>
//             </div>
//           </div>
//         );
//       };


// export default ProductCard