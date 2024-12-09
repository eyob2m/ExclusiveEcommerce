/* eslint-disable react/prop-types */
import { AiFillStar, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { addToCart } from "../feature/cart";
import { useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import { addTowishlist, removeFromWishlist } from "../feature/wishlist";

export const MainCard = ({ id,discount, image, title, price, netprice, stars }) => {
  const loggedIn = useSelector(state=>state.login)
  const dispatch = useDispatch()
 return (
    
      <div  className="item z-20 mx-6 flex flex-col h-[350px] w-[270px]">
        <div className="p-10 relative bg-[#F5F5F5] rounded-md">
          <div className="w-[190px] relative h-[180px]">
            <img className="object-contain w-full h-full" src={image} alt="" />
           
          </div>
         {discount &&  <div className="absolute top-4 left-4 font-Poppis bg-[#DB4444] text-white py-1 rounded-md px-3 font-[400] text-[1.2rem ]">
            {" "}
            {discount}
          </div>}
          <div className="absolute  top-4 right-4 font-Poppis  text-black py-1 rounded-md px-3 font-[400] text-[1.2rem ]">
            <div className="w-[24px] flex items-center justify-center h-[24px] bg-white rounded-full">
              <AiOutlineHeart onClick={()=>{dispatch(addTowishlist({ id,discount, image, title, price, netprice, stars })); toast.success('Item added to wishlist',{position: 'top-left', duration: 4000})}} className="text-3xl" />
            </div>
            <div className="w-[24px] h-[24px] flex items-center justify-center bg-white rounded-full">
            <Link to={`/product/${id}`}>    <AiOutlineEye className="text-3xl" /></Link>
            </div>
          </div>
          <div onClick={()=>{loggedIn ? dispatch(addToCart({ id,discount, image, title, price, netprice, stars })): toast.error('Sign Up before adding to cart',{position: 'top-left', duration: 4000})}} className="opacity-15 z-50  duration-200 hover:opacity-100 absolute bottom-0 pb-2 bg-black w-full flex justify-center items-end text-white h-[20%] text-nowrap translate-x-[-50%]  left-[50%]">
                <h1 className="text-[2rem]">Add To Cart</h1>
            </div>
        </div>
        <Link   to={`/product/${id}`}>
        <div className="flex font-Poppis flex-col gap-2">
          <h1 className="font-Poppis font-[500] text-[1.6rem] hover:underline">{title}</h1>
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
        </Link>
      </div>
    );}

   
   export const NDiscountCard = ({id, image, title, price, netprice, stars,wishlist }) => {
    const dispatch = useDispatch()
    const loggedIn = useSelector(state=>state.login)
  
        return (
           
                 <div className="item mx-6 flex flex-col h-[350px] w-[270px]">
            <div className="p-10 relative bg-[#F5F5F5] rounded-md">
              <div className="w-[190px] h-[180px]">
                <img className="object-contain w-full h-full" src={image} alt="" />
              </div>
    
              <div  className="absolute  top-4 right-4 font-Poppis  text-black py-1 rounded-md px-3 font-[400] text-[1.2rem ]">
                <div className="w-[24px] flex items-center justify-center h-[24px] bg-white rounded-full">
                {
                    wishlist ?  <MdDeleteOutline onClick={()=>{dispatch(removeFromWishlist(id)); toast.success('Item removed from wishlist',{position: 'top-left', duration: 4000})}} className="text-3xl" /> :<Link to={`/product/${id}`}> <IoEyeOutline className="text-3xl" /> </Link>
                }
                </div>
               
              </div>
              <div onClick={()=>{loggedIn ? dispatch(addToCart({id, image, title, price, netprice, stars,wishlist })): toast.error('Sign Up before adding to cart',{position: 'top-left', duration: 4000})}} className="opacity-15 z-50  duration-200 hover:opacity-100 absolute bottom-0 pb-2 bg-black w-full flex justify-center items-end text-white h-[20%] text-nowrap translate-x-[-50%]  left-[50%]">
                <h1 className="text-[2rem]">Add To Cart</h1>
            </div>
            </div>
            <Link to={`/product/${id}`}>
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
            </Link>
          </div>
         
        );
      };
 
 
    export const WCartCard = ({id, stat, image, title, price, netprice, stars }) => {
      const dispatch = useDispatch()
      const loggedIn = useSelector(state=>state.login)
     
        return (
          
                   <div className=" item mx-6 flex flex-col h-[350px] w-[270px]">
            <div className="p-10 relative bg-[#F5F5F5] rounded-md">
              <div className="w-[190px] h-[180px]">
                <img className="object-contain w-full h-full" src={image} alt="" />
              </div>
              <div className="absolute top-4 left-4 font-Poppis bg-[#00FF66] text-white py-1 rounded-md px-3 font-[400] text-[1.2rem ]">
               
                {stat}
              </div>
              <div className="absolute  top-4 right-4 font-Poppis  text-black py-1 rounded-md px-3 font-[400] text-[1.2rem ]">
                <div className="w-[24px] flex items-center justify-center h-[24px] bg-white rounded-full">
                  <AiOutlineHeart onClick={()=>{dispatch(addTowishlist({id, stat, image, title, price, netprice, stars })); toast.success('Item added to wishlist',{position: 'top-left', duration: 4000})}} className="text-3xl" />
                </div>
                <div className="w-[24px] flex items-center justify-center h-[24px] bg-white rounded-full">
                <Link to={`/product/${id}`}>  <AiOutlineEye className="text-3xl" /></Link> 
                </div>
              </div>
              <div onClick={()=>{loggedIn ? dispatch(addToCart({id, stat, image, title, price, netprice, stars })): toast.error('Sign Up before adding to cart',{position: 'top-left', duration: 4000})}} className="opacity-15 z-50  duration-200 hover:opacity-100 absolute bottom-0 pb-2 bg-black w-full flex justify-center items-end text-white h-[20%] text-nowrap translate-x-[-50%]  left-[50%]">
                <h1 className="text-[2rem]">Add To Cart</h1>
            </div>
            </div>
            <Link to={`/product/${id}`}>
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
            </Link>
          </div>
          
        );
      };

