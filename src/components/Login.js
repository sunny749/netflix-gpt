import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [signin,setSignIn]=useState(true)
  const [valid,setValid]=useState([])
  const [showPassword,setShowPassword]=useState(false)
  const [form,setForm]=useState({
    'fullname':['',false],
    'email or phone':['',false],
    'password':['',false],
    'conform password':['',false],
  })
  const toggleSignIn=()=>{
    setSignIn(!signin)
    setForm({
      'fullname':['',false],
      'email or phone':['',false],
      'password':['',false],
      'conform password':['',false],
    })
    setValid([])
  }
  const handleChange=(e,regex)=>{
    setForm(prev=>{
      let state={...prev}
      if(regex){
        if(regex.test(e.target.value)){
          state[e.target.name]=[e.target.value,true]
      }
      else{
          state[e.target.name]=[e.target.value,false]
        }
      }
      else{
        if(e.target.value===''){
          state[e.target.name]=[e.target.value,false]
        }
        else{
          state[e.target.name]=[e.target.value,true]
        }
      }
      console.log(state)
      return state
    })
  }
  const onSingIn=()=>{
    if(signin){
      for(let e of Object.keys(form)){
        if(e==='email or phone'||e==='password'){
          if(form[e][1]==false){
            setValid([e,true])
            break
          }
          else{
            setValid([])
          }
        }
      }
    }
    else{
      for(let e of Object.keys(form)){
          if(form[e][1]==false){
            setValid([e,true])
            break
          }
          else{
            setValid([])
          }
      }
    }
  }
  return (
    <div className="w-[100%] relative overflow-x-hidden h-screen">
        <Header />
        <div
    className="absolute inset-0  w-[144%] h-[144%] bg-cover bg-top-left"
    style={{
      backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg)',
    }}
    
  ></div>
        <div className="absolute inset-0 h-[144%] bg-black z-10 opacity-50"></div>
        
        <form onSubmit={(e)=>e.preventDefault()} className='text-white rounded-sm xsm:py-20 xsm:px-8 xsm:absolute xsm:inset-0 sm:relative sm:px-16 sm:py-12 bg-black  sm:bg-opacity-70 z-30 xsm:h-[144%] sm:h-[85%] sm:w-[450px] mx-auto sm:my-[1.5%]'>
            <h1 className='font-bold xsm:text-4xl text-[2rem] pt-0 pb-6'>{signin?'Sign In':'Sign Up'}</h1>
            
            {valid[1]?<p className='text-black bg-yellow-200 p-2 my-2 rounded-sm'>!please enter valid {valid[0]}</p>:null}

            {!signin&&<input type="text" value={form.fullname[0]} onChange={(e)=>handleChange(e,/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/)} name='fullname' className='p-4 my-2 rounded-md bg-transparent focus:bg-transparent w-[100%] border border-gray-500' placeholder='Full name'></input>}
            
            {!signin&&form['fullname'][0]!=''&&form['fullname'][1]==false?<p className='text-red-600'>enter a valid fullname</p>:null}

            <input type="text" value={form['email or phone'][0]} onChange={(e)=>handleChange(e,/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)} name='email or phone' className='p-4 my-2 rounded-md bg-transparent focus:bg-transparent w-[100%] border border-gray-500' placeholder='Email or phone number'/>
            
            {form['email or phone'][0]!=''&&form['email or phone'][1]==false?<p className='text-red-600'>enter a valid email</p>:null}
            <div className='relative'>
            <div className='absolute bottom-6 right-2 select-none' onClick={()=>setShowPassword(!showPassword)}>{showPassword?'hide':'show'}</div>
            <input value={form['password'][0]} onChange={(e)=>handleChange(e,/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)} type={showPassword?'text':'password'} autoComplete="password" name='password' className='p-4 my-2 rounded-md bg-transparent w-[100%] border border-gray-500' placeholder='Password'></input>
            </div>
            
            {form['password'][0]!=''&&form['password'][1]==false?<p className='text-red-600'>enter a valid password</p>:null}
            
            <div className='relative'>
            <div className='absolute bottom-6 right-2 select-none' onClick={()=>setShowPassword(!showPassword)}>{showPassword?'hide':'show'}</div>
            {!signin&&<input value={form['conform password'][0]} onChange={(e)=>handleChange(e,new RegExp(`^${form['password'][0]}$`))} type={showPassword?'text':"password"} autoComplete={'conform password'} name='conform password' className='p-4 my-2 rounded-md bg-transparent w-[100%] border border-gray-500' placeholder='Conform password'></input>}
            </div>
            
            {!signin&&form['conform password'][1]==false&&form['conform password'][0]!==''?<p className='text-red-600'>password should match with conform password</p>:null}
            
            <button onClick={()=>onSingIn()} className='bg-red-600 px-4 py-2 my-2 rounded-md w-[100%]'>{signin?'Sign In':'Sign Up'}</button>

            <p className='py-2 my-2 w-full select-none'>{signin?'New to Netflix? ':'Already registered? '}<span className='cursor-pointer hover:underline' onClick={()=>toggleSignIn()}>{signin?"Sign up now":'Sign in now'}</span>.</p>
        </form>
    </div>
  )
}

export default Login