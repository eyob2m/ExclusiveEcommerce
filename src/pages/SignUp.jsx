
import { Link } from 'react-router-dom'
import signupimage from '../assets/dl.beatsnoop 1.png'
import { GrGoogle } from "react-icons/gr"
const SignUp = () => {
  return (
    <div>

  <div className="flex mr-80 my-20  gap-40 h-[706px]">
   <div className="h-[606px] overflow-hidden">
   <img className="object-contain"  src={signupimage} alt="" />
   </div>
    <div className="flex text-nowrap flex-col font-Poppis  gap-[38px]">
      <div className="flex flex-col gap-[10px] font-Inter text-black"> <h1 className="text-[3.6rem] font-[500]">Create an account</h1> <p className="text-[1.6rem] font-[400]">Enter your details below</p></div>
      <div className="flex flex-col gap-[24px]">
        <input type="text" className="focus:outline-none focus:border-none border-b text-[1.6rem] font-[400] border-gray-600 py-3" placeholder="Name" />
        <input type="text" className="focus:outline-none focus:border-none border-b text-[1.6rem] font-[400] border-gray-600 py-3" placeholder="Email or Phone Number" />
        <input type="text" className="focus:outline-none focus:border-none border-b text-[1.6rem] font-[400] border-gray-600 py-3" placeholder="Password" />
      </div>
      <div className="text-[1.6rem] flex flex-col gap-6 font-[500]">
        <button className="bg-[#DB4444] text-tfa py-4 w-full">
          Create Account
        </button>
        <div className="flex justify-center text-black gap-3 items-center border border-gray-600 rounded-lg py-4 w-full">
          <GrGoogle />
          <h2 className="font-[400]">Sign up with Google</h2>
        </div>
        <div className="mt-4 text-center font-[500]">
          Already hae account?  <Link to={'/login'}>  <span className="underline cursor-pointer">Log in</span></Link>
        </div>
      </div>
    </div>
  </div>
  

    </div>
  )
}

export default SignUp