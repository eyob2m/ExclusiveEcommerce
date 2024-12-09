import { useSelector } from "react-redux";

const Account = () => {
    const user = useSelector(state=>state.user)
  return (
    <div>
    
      <div className="flex  font-[400] font-Poppis flex-col py-20 px-[100px] mb-10 gap-28">
      <div className="flex justify-between text-[1.4rem]">
          <div className="flex gap-3"><p className="opacity-75"> Home / </p>
          <span> Cart</span></div>
        <h1>Welcome! <span className="text-[#DB4444]">Md Rime!</span></h1>
        </div>
        <div className="flex justify-between  text-[1.6rem]">
            <div className="flex flex-col gap-8">
                <div className="font-Poppis">
                <h2 className="font-[500]">Manage My Account</h2>
                <ul className="ml-12 flex mt-4 flex-col gap-2 font-[400] ">
                    <li className="opacity-100 text-[#DB4444]">My Profile</li>
                    <li className="opacity-50">Address Book</li>
                    <li className="opacity-50">My Payment Options</li>
                </ul>
                </div>
                <div className="font-Poppis">
                <h2 className="font-[500]">My Order</h2>
                <ul className="ml-12 flex mt-4 flex-col gap-2 font-[400] ">
         
                    <li className="opacity-50">My Returns</li>
                    <li className="opacity-50">My Cancellations</li>
                </ul>
                </div>
                <div className="font-Poppis">
                <h2 className="font-[500]">My Wishlist</h2>
                
                </div>
            </div>
            <div className="form   w-[70%] shadow-xl p-20">
                <h1 className=" text-[2rem] text-[#DB4444] mb-10">Edit Your Profile</h1>
            <div className="flex flex-col flex-1 gap-5">
            
            <div className="flex gap-20  justify-between">
            <div className="font-Poppis w-full flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                <h1>First Name</h1>
                <input defaultValue={user.name ?user.name : null} placeholder="Eyob" className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div>
            <div className="font-Poppis w-full flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                <h1>Last Name</h1>
                <input  placeholder="Betemariam" className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div>
            </div>
            <div className="flex gap-20 w-full justify-between">
            <div className="font-Poppis w-full flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                <h1>Email</h1>
                <input defaultValue={user.email ?user.email : null} placeholder="eyob2etemariam@gmail.com" className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div>
            <div className="font-Poppis w-full flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                <h1>Address</h1>
                <input placeholder="Addis Ababa" className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div>
            </div>
             <div className="font-Poppis flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                <h1>Password Changes</h1>
                <input placeholder="Current Password" className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div> <div className="font-Poppis flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                
                <input placeholder="New Password" className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div> <div className="font-Poppis flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                
                <input placeholder="Confirm New Password" className="bg-[#F5F5F5] px-3 py-4" type="text" />
            </div>
        </div>
       <div className="flex justify-end gap-5 mt-10">
       <button className="border px-20 py-5 text-black rounded-lg ">
              Cancel
            </button> <button className="border px-20 py-5 bg-[#DB4444] rounded-lg text-white">
              Save Changes
            </button>
       </div>
            </div>
        </div>
      </div>
   
    </div>
  );
};

export default Account;
