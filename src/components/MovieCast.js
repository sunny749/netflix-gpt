import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCast = () => {
    const cast=useSelector(state=>state.movies.movieCast)
    if(cast===null)return 
  return (
    <div className='w-[90%] text-white mt-4 mx-auto '>
        <h1 className='text-4xl font-bold'>Cast</h1>
        <div className='xsm:w-[180vw] mt-4 font-bold text-white flex overflow-x-scroll overflow-y-hidden'>
            <div className='flex gap-3'>
            {/* <div className= 'bg-black'>
                        <img className='w-36' src={IMG_CDN_URL+cast[0].profile_path} alt="Cast Profile" />
                        <h1>{cast[0].name}</h1>
                        <h1>{cast[0].known_for_department}</h1>
                    </div> */}
            {
                cast.map((c)=>{
                    if(c.profile_path===null)return
                    return <div className='relative w-40 mb-2' key={c.name}>
                        <img className='w-full rounded-xl' src={IMG_CDN_URL+c.profile_path} alt="Cast Profile" />
                        <div className='absolute text-center rounded-xl w-full bg-gray-800 bg-opacity-70 bottom-0'>
                            <h1>{c.name}</h1>
                            <h1>{c.character}</h1>
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    </div>
  )
}

export default MovieCast