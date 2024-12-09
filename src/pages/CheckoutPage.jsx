
import visa from "../icons/Visa.png";
import pp from "../icons/image 33.png";
import mc from "../icons/Mastercard.png";
import bk from "../icons/Bkash.png";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { reset } from "../feature/cart";




const CheckoutPage = () => {
  const navigate =   useNavigate()
  const dispatch = useDispatch()
  const place = ()=>{
    dispatch(reset())
    toast.success("Order Placed",{position: "top-left",duration: 4000})
    navigate('/')
    
  }
  const cart = useSelector(state=>state.cart)
  
  return (
    <div>
    
      <div className="flex  text-[1.4rem]  font-[400] font-Poppis flex-col py-20 px-[100px] mb-10 gap-16">
      <div className="flex gap-3">
          <p className="opacity-75"> Home / My Account / Product / View Cart / </p>
          <span>Checkout</span>
        </div> 
       <h2 className="text-[3.6rem] font-[500] font-Inter">Billing Details</h2>
       <div className="flex justify-between gap-72">
        <div className="flex flex-col flex-1 gap-5">
            <div className="font-Poppis flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                <h1>First Name</h1>
                <input className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div>
            <div className="font-Poppis flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                <h1>Company Name</h1>
                <input className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div> <div className="font-Poppis flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                <h1>Street Address*</h1>
                <input className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div> <div className="font-Poppis flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                <h1>Apartment, floor, etc. (optional)</h1>
                <input className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div> <div className="font-Poppis flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                <h1>Town/City*</h1>
                <input className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div> <div className="font-Poppis flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                <h1>Phone Number*</h1>
                <input className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div> <div className="font-Poppis flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                <h1>Email Address*</h1>
                <input className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div>
           <div className="flex gap-5">
           <input type="checkbox"  className="accent-[#DB4444]" name="" id="" />
           <h2>Save this information for faster check-out next time</h2>
           </div>
        </div>
        <div className="w-[537px] flex flex-col gap-10">
       
          {
            cart.map(c=>{
              return (
                <ul key={c.id} className="justify-between flex  w-[400px]">
                <li className="flex flex-2 mr-20 items-center gap-10">
                  {" "}
                  <img src={c.image} width={"54px"} height={"54px"} alt="" />{" "}
                  <h2 className="">{c.title}</h2>
                </li>
               
                <li className="">${c.price}</li>
              </ul>
              )
            })
          }
         
          
            <div className="flex w-[400px] justify-between">
                <h1>Subtotal:</h1>
                <h1>$1750</h1>
              </div>
              <hr  className="w-[400px]"/>
              <div className="flex w-[400px] justify-between">
                <h1>Shipping:</h1>
                <h1>Free</h1>
              </div>
              <hr className="w-[400px]" />{" "}
              <div className="flex w-[400px] justify-between">
                <h1>Total:</h1>
                <h1>$1750</h1>
              </div>
              <div className="flex items-center w-[400px] justify-between">
                <div className="flex flex-col gap-10">
                        <div className="flex gap-10 ">
                            <input type="radio" name="" id="" />
                            <h1>Bank</h1>
                        </div>
                        <div className="flex gap-10">
                            <input type="radio" name="" id="" />
                            <h1>Cash on delivery</h1>
                        </div>
                </div>
                <div className="flex self-start">
                    <img src={bk} alt="" />
                    <img src={visa} alt="" />
                    <img src={mc} alt="" />
                    <img src={pp} alt="" />
                </div>
              </div>
              <div className="flex h-fit gap-10">
            <input
              placeholder="Coupon Code"
              className="border  border-black rounded-lg px-20 py-5"
              type="text"
            />
            <button className="border px-20 py-5 bg-[#DB4444] rounded-lg text-white">
              Apply Coupon
            </button>
          </div>
              <button onClick={()=>place()} className="mb-5  w-fit  bg-[#DB4444] text-white border px-20 py-5  rounded-lg ">
                Place Order
              </button>
            </div> 
       
       </div>
      </div>
  
    </div>
  )
}

export default CheckoutPage