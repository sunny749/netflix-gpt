import Header from './Header'
import { useState } from 'react'
import validation from '../utils/validation'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
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
      // else{
      //   if(e.target.value===''){
      //     state[e.target.name]=[e.target.value,false]
      //   }
      //   else{
      //     state[e.target.name]=[e.target.value,true]
      //   }
      // }
      // console.log(state)
      return state
    })
  }
  const onSingIn=()=>{
      let error=validation(form,signin)
      setValid(error)
    if(error.length)return 
    if(signin){
      console.log('signin page')
      signInWithEmailAndPassword(auth, form['email or phone'][0], form['password'][0])
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const {uid,displayName,email,photoURL,passowrd}=user
        dispatch(addUser({uid,displayName,email,passowrd,photoURL}))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValid(['user name and password',true])
      });

    }
    else{
      console.log('sign up page')
      createUserWithEmailAndPassword(auth, form['email or phone'][0],form['password'][0])
      .then(async(userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user,{
          displayName:form['fullname'][0],
          photoURL:'https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp'
        }).then(()=>{
          const {uid,email,passowrd,photoURL,displayName} = auth.currentUser;
          dispatch(addUser({uid,email,passowrd,photoURL,displayName}))
          console.log(user)
        })
        .catch(error=>{
          console.log(error)
        })
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
    }
  }
  return (
    <div className="w-[100%] relative overflow-x-hidden h-[100vh]">
        <Header />
        <div
    className="absolute inset-0  w-[144%] h-[144%] min-h-[1000px] bg-cover bg-top-left"
    style={{
      backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg)',
    }}
    
  ></div>
        <div className="absolute inset-0 h-[144%] min-h-[1000px] bg-black z-10 opacity-50"></div>
        
        <form onSubmit={(e)=>e.preventDefault()} className='text-white rounded-sm xsm:py-20 xsm:px-8 xsm:absolute xsm:inset-0 sm:relative sm:px-16 sm:py-12 bg-black  sm:bg-opacity-70 z-30 xsm:h-[144%] sm:h-[707px] sm:w-[450px] mx-auto sm:my-[1.5%]'>
            <h1 className='font-bold xsm:text-4xl text-[2rem] pt-0 pb-6'>{signin?'Sign In':'Sign Up'}</h1>
            
            {valid[1]?<p className='text-black bg-yellow-200 p-2 my-2 rounded-sm'>!please enter a valid {valid[0]}</p>:null}

            {!signin&&<input type="text" value={form.fullname[0]} onChange={(e)=>handleChange(e,/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/)} name='fullname' className='p-4 my-2 rounded-md bg-transparent focus:bg-transparent w-[100%] border border-gray-500 focus:outline-none focus:border-white' placeholder='Full name'></input>}
            
            {!signin&&form['fullname'][0]!=''&&form['fullname'][1]==false?<p className='text-red-600'>enter a valid fullname</p>:null}

            <input type="text" value={form['email or phone'][0]} onChange={(e)=>handleChange(e,/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)} name='email or phone' className='p-4 my-2 rounded-md bg-transparent  w-[100%] border border-gray-500 focus:outline-none focus:border-white' placeholder='Email or phone number'/>
            
            {form['email or phone'][0]!=''&&form['email or phone'][1]==false?<p className='text-red-600'>enter a valid email</p>:null}
            <div className='relative'>
            <div className='absolute bottom-6 right-2 select-none' onClick={()=>setShowPassword(!showPassword)}>{showPassword?'hide':'show'}</div>
            <input value={form['password'][0]} onChange={(e)=>handleChange(e,/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)} type={showPassword?'text':'password'} autoComplete="password" name='password' className='p-4 my-2 rounded-md bg-transparent w-[100%] border border-gray-500 focus:outline-none focus:border-white' placeholder='Password'></input>
            </div>
            
            {form['password'][0]!=''&&form['password'][1]==false?<p className='text-red-600'>enter a valid password</p>:null}
            
            <div className='relative'>
            {!signin&&<div className='absolute bottom-6 right-2 select-none' onClick={()=>setShowPassword(!showPassword)}>{showPassword?'hide':'show'}</div>}
            {!signin&&<input value={form['conform password'][0]} onChange={(e)=>handleChange(e,new RegExp(`^${form['password'][0]}$`))} type={showPassword?'text':"password"} autoComplete={'conform password'} name='conform password' className='p-4 my-2 rounded-md bg-transparent w-[100%] border border-gray-500 focus:outline-none focus:border-white' placeholder='Conform password'></input>}
            </div>
            
            {!signin&&form['conform password'][1]==false&&form['conform password'][0]!==''?<p className='text-red-600'>password should match with conform password</p>:null}
            
            <button onClick={()=>onSingIn()} className='bg-red-600 px-4 py-2 my-2 rounded-md w-[100%]'>{signin?'Sign In':'Sign Up'}</button>

            <p className='py-2 my-2 w-full select-none'>{signin?'New to Netflix? ':'Already registered? '}<span className='cursor-pointer hover:underline' onClick={()=>toggleSignIn()}>{signin?"Sign up now":'Sign in now'}</span>.</p>
        </form>
    </div>
  )
}

export default Login