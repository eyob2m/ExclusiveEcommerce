
import pc from "../icons/g27cq4-500x500 1.png";
import js from "../icons/g92-2-500x500 1.png";

const Cart = () => {
  return (
    <div>
  
      <div className="flex  font-[400] font-Poppis flex-col py-20 px-[100px] mb-10 gap-28">
        <div className="flex gap-3 text-[1.4rem]">
          <p className="opacity-75"> Home / </p>
          <span> Cart</span>
        </div>
        <section className="flex flex-col gap-20 text-[1.6rem]">
          <ul className="flex justify-between shadow-md ">
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>SubTotal</li>
          </ul>
          <ul className="flex justify-between shadow-md">
            <li className="flex items-center gap-10">
              {" "}
              <img width={"54px"} height={"54px"} src={pc} alt="" />{" "}
              <h2 className="">LCD Monitor</h2>
            </li>
            <li>$650</li>
            <li>
              {" "}
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="border rounded-md px-2 w-[50px] border-black"
              />{" "}
            </li>
            <li>$650</li>
          </ul>
          <ul className="flex justify-between shadow-md">
            <li className="flex items-center gap-10">
              {" "}
              <img src={js} width={"54px"} height={"54px"} alt="" />{" "}
              <h2 className="">LCD Monitor</h2>
            </li>
            <li>$650</li>
            <li>
              {" "}
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="border rounded-md px-2 w-[50px] border-black"
              />{" "}
            </li>
            <li>$650</li>
          </ul>
          <div className="flex justify-between">
            <button className="border px-20 py-5 border-black rounded-lg ">
              Return to Shop
            </button>

            <button className="border px-20 py-5 border-black rounded-lg ">
              Update Cart
            </button>
          </div>
        </section>
        <section className="flex text-[1.6rem] justify-between">
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
          <div>
            <div className="border-2 rounded-lg w-[470px] flex flex-col gap-10 border-black  px-10">
              <h1 className="mt-5 text-[2rem]">Cart Toal</h1>
              <div className="flex justify-between">
                <h1>Subtotal:</h1>
                <h1>$1750</h1>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1>Shipping:</h1>
                <h1>Free</h1>
              </div>
              <hr />{" "}
              <div className="flex justify-between">
                <h1>Total:</h1>
                <h1>$1750</h1>
              </div>
              <button className="mb-5 w-fit self-center bg-[#DB4444] text-white border px-20 py-5  rounded-lg ">
                Update Cart
              </button>
            </div>
          </div>
        </section>
      </div>
    
    </div>
  );
};

export default Cart;
