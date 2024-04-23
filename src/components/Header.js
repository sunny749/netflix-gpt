import {signOut} from 'firebase/auth'
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import {addUser, removeUser} from '../utils/userSlice'
import { NetflixLogo,SUPPORTED_LANGUAGES } from '../utils/constants'
import { useLocation } from 'react-router-dom'
import { toggleGptSearch } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'
import { Link } from 'react-router-dom'

const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector(state=>state.user)
  const gptSearch=useSelector(state=>state.gpt.gptSearch)
  const mainMovie=useSelector(state=>state.movies.mainMovie)
  const path=useLocation()
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error')
      console.log(error)
    });
  }
  const handleLangChang=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,passowrd,photoURL,displayName} = user;
        dispatch(addUser({uid,email,passowrd,photoURL,displayName}))
        // ...
        if(mainMovie===null){
          navigate('/browse')
        }
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
        {path.pathname==='/'&&<img className="xl:w-48 sticky z-40 xsm:w-36 xsm:top-2 xsm:left-5 sm:w-40 md:top-1 md:left-3 xl:top-1 xl:left-36" src={NetflixLogo}
         alt="logo" />
         }
         {user&&<div className='flex z-40 justify-between xsm:w-[180vw] sm:w-full absolute items-center px-4 xsm:px-1 py-2 bg-gradient-to-b from-black to-transparent'>
                  <img src={NetflixLogo} className='w-36 pl-5 ' alt="logo" />
                  <div className="p-2 xsm:min-w-14 flex">
                  <button className="text-white font-bold pr-2">Welcome {user.displayName}</button>
                  {gptSearch&&<select onChange={handleLangChang} className='p-2 bg-blue-500 rounded-lg text-white' name="">
                    {SUPPORTED_LANGUAGES.map(lang=>{
                      return <option value={lang.identifier} key={lang.name} >{lang.name}</option>
                    })}
                  </select>}
                  {mainMovie&&<Link to={'/browse'} className='bg-blue-500 text-white rounded-lg px-4 py-2 mx-2'>Home</Link>}
                  {path.pathname==='/browse'&&<button onClick={()=>dispatch(toggleGptSearch())} className='bg-blue-500 text-white rounded-lg px-4 py-2 mx-2'>{gptSearch?'Home':'Gpt Search'}</button>}
                  {/* <img className="w-10 mr-2 rounded-lg" src={user.photoURL} alt="user-icon" /> */}
                  <button onClick={()=>handleSignOut()} className="py-2 px-4 rounded-lg text-white bg-blue-500">Exit</button>
                </div>
                </div>
         }
         
    </div>
  )
}

export default Header