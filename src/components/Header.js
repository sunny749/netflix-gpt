import {signOut} from 'firebase/auth'
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import {addUser, removeUser} from '../utils/userSlice'
import { NetflixLogo } from '../utils/constants'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector(state=>state.user)
  const path=useLocation()
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('signout successfully')
    }).catch((error) => {
      // An error happened.
      navigate('/error')
      console.log(error)
    });
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,passowrd,photoURL,displayName} = user;
        dispatch(addUser({uid,email,passowrd,photoURL,displayName}))
        // ...
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
        // User is signed out
        // ...
      }
    });
    return()=>{
      unsubscribe()
    }
  },[])
  return (
    <div className=''>
        {path.pathname==='/'&&<img className="xl:w-48 sticky z-40 xsm:top-2 xsm:left-5 xsm:w-32 md:top-1 md:left-3 xl:top-1 xl:left-36" src={NetflixLogo}
         alt="logo" />}
         {user&&<div className='flex z-40 justify-between w-screen absolute items-center px-4 py-2 bg-gradient-to-b from-black to-transparent'>

                  <img src={NetflixLogo} className='w-36 pl-5' alt="logo" />
                  <div className="p-2 xsm:min-w-14 flex">
                  <img className="w-10" src={user.photoURL} alt="user-icon" />
                  <button onClick={()=>handleSignOut()} className="text-red-600 font-bold">({user.displayName})</button>
                </div>
                </div>
         }
         
    </div>
  )
}

export default Header