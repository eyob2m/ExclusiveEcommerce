import Footer from "../components/Footer"
import Header from "../components/Header"
import PreHeader from "../components/PreHeader"
import signupimage from '../assets/dl.beatsnoop 1.png'

const Login = () => {
  return (
    <div>
  <PreHeader/>

    <Header />
  <div className="flex mr-80 my-20  gap-40 h-[706px]">
   <div className="h-[606px] overflow-hidden">
   <img className="object-contain"  src={signupimage} alt="" />
   </div>
    <div className="flex text-nowrap flex-col font-Poppis  gap-[38px]">
      <div className="flex flex-col gap-[10px] font-Inter text-black"> <h1 className="text-[3.6rem] font-[500]">Log in to Exclusive</h1> <p className="text-[1.6rem] font-[400]">Enter your details below</p></div>
      <div className="flex flex-col gap-[24px]">

        <input type="text" className="border-b text-[1.6rem] font-[400] border-gray-600 py-3" placeholder="Email or Phone Number" />
        <input type="text" className="border-b text-[1.6rem] font-[400] border-gray-600 py-3" placeholder="Password" />
      </div>
      <div className="text-[1.6rem] items-center justify-between flex gap-6 font-[500]">
        <button className="bg-[#DB4444] rounded-lg text-tfa py-4 w-full">
          Log in
        </button>
       
          <h2 className="font-[400] text-[#DB4444]">Forget Password</h2>
       
      
      </div>
    </div>
  </div>
    <Footer />

    </div>
  )
}

export default Login