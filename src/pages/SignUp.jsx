
import { Link, useNavigate } from 'react-router-dom'
import signupimage from '../assets/dl.beatsnoop 1.png'
import { GrGoogle } from "react-icons/gr"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignUpMutation } from '../feature/auth/signupSlice'
import { useDispatch} from 'react-redux'
import { loggedin } from '../feature/auth/login'
import toast from 'react-hot-toast'
import { setUser } from '../feature/user'

const SignUp = () => {

 const navigate =  useNavigate()
  const dispatch = useDispatch()
  const schema = z.object({
    "name": z.string().min(1,"Fill this field"),
    "email": z.string().email({message: "This is email field"}),
    "password": z.string().min(1,"Fill this field"),
  }).passthrough()
  const { register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(schema)})
  const [signUp,{data, isLoading}] = useSignUpMutation()
const submit = async (data1)=>{
await signUp(data1)
console.log({"Your Information": data1})

await dispatch(loggedin(true))
await dispatch(setUser(data1))
navigate('/')
toast.success(`Welcome ${data1.name}, You have Created new Account`,{position: "top-left",duration: 4000})

}
data && console.log({"Fake API Response": data})
  return (
    <div>

  <div className="flex mr-80 my-20  gap-40 h-[706px]">
   <div className="h-[606px] overflow-hidden">
   <img className="object-contain"  src={signupimage} alt="" />
   </div>
    <div className="flex text-nowrap flex-col font-Poppis  gap-[38px]">
      <div className="flex flex-col gap-[10px] font-Inter text-black"> <h1 className="text-[3.6rem] font-[500]">Create an account</h1> <p className="text-[1.6rem] font-[400]">Enter your details below</p></div>
      <div className="flex flex-col gap-[24px]">
        <input {...register("name")} type="text" className="focus:outline-none focus:border-none border-b text-[1.6rem] font-[400] border-gray-600 py-3" placeholder="Name" />
        {errors.name && <h1 className='text-red-600'>{errors.name.message}</h1>}
        <input {...register("email")} type="text" className="focus:outline-none focus:border-none border-b text-[1.6rem] font-[400] border-gray-600 py-3" placeholder="Email or Phone Number" />
        {errors.email && <h1 className='text-red-600'>{errors.email.message}</h1>}
        <input {...register("password")} type="text" className="focus:outline-none focus:border-none border-b text-[1.6rem] font-[400] border-gray-600 py-3" placeholder="Password" />
        {errors.password && <h1 className='text-red-600'>{errors.password.message}</h1>}
      </div>
      <div className="text-[1.6rem] flex flex-col gap-6 font-[500]">
        <button onClick={handleSubmit(submit)} className="bg-[#DB4444] text-tfa py-4 w-full">
         {isLoading ? "Processing": "Create Account"} 
        </button>
        <div className="flex justify-center text-black gap-3 items-center border border-gray-600 rounded-lg py-4 w-full">
          <GrGoogle />
          <h2 className="font-[400]">Sign up with Google</h2>
        </div>
        <div className="mt-4 text-center font-[500]">
          Already have account? <Link to={'/login'}>  <span className="underline cursor-pointer">Log in</span></Link>
        </div>
      </div>
    </div>
  </div>
  

    </div>
  )
}

export default SignUp