import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [signin,setSignIn]=useState(true)
  const toggleSignIn=()=>{
    setSignIn(!signin)
  }
  return (
    <div className="w-[100%] relative overflow-hidden h-screen">
        <Header />
        <div
    className="absolute w-[144%] inset-0 bg-cover bg-top-left"
    style={{
      backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg)',
    }}
  ></div>
        <div class="absolute inset-0  bg-black z-10 opacity-50"></div>
        <form className='text-white rounded-sm xsm:py-20 xsm:px-8 xsm:absolute xsm:inset-0 sm:relative sm:px-16 sm:py-12 bg-black sm:bg-opacity-70 z-30 xsm:h-full sm:h-[85%] sm:w-[450px] mx-auto sm:my-[6.5%]'>
            <h1 className='font-bold xsm:text-4xl text-[2rem] pt-0 pb-6'>{signin?'Sign In':'Sign Up'}</h1>
            {!signin&&<input type="text" className='p-4 my-2 rounded-md bg-transparent w-[100%] border border-gray-500' placeholder='Full name'></input>}
            <input type="text" className='p-4 my-2 rounded-md bg-transparent w-[100%] border border-gray-500' placeholder='Email or phone number'/>
            <input type="password" className='p-4 my-2 rounded-md bg-transparent w-[100%] border border-gray-500' placeholder='Password'/>
            {!signin&&<input type="password" className='p-4 my-2 rounded-md bg-transparent w-[100%] border border-gray-500' placeholder='Conform password'></input>}
            <button className='bg-red-600 px-4 py-2 my-2 rounded-md w-[100%]'>{signin?'Sign In':'Sign Up'}</button>
            <p className='py-2 my-2 w-full select-none'>New to Netflix? <span className='cursor-pointer hover:underline' onClick={()=>toggleSignIn()}>Sign up now</span>.</p>
        </form>
    </div>
  )
}

export default Login