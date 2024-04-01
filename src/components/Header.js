import {signOut} from 'firebase/auth'
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import {addUser, removeUser} from '../utils/userSlice'

const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector(state=>state.user)
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
    onAuthStateChanged(auth, (user) => {
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
  },[])
  return (
    <div className='flex items-center'>
        <img className="xl:w-48 sticky z-40 xsm:top-2 xsm:left-5 xsm:w-32 md:top-1 md:left-3 xl:top-1 xl:left-36" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
         alt="logo" />
         {user&&<div className="p-2 xsm:min-w-14 flex z-40 absolute top-3 right-6">
          <img className="w-10" src={user.photoURL} alt="user-icon" />
          <button onClick={()=>handleSignOut()} className="text-red-600 font-bold">({user.displayName})</button>
         </div>}
    </div>
  )
}

export default Header