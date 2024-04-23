import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const VideoTitle = ({title,overview,id}) => {
    // console.log(id)
  return (
    <div className='pt-[17%] pl-11 absolute z-20 w-full overflow-hidden -mt-[5%] aspect-video text-white bg-gradient-to-br from-black to-transparent'>
        <h1 className='lg:text-5xl md:text-4xl sm:text-xl xsm:text-xl font-bold w-1/2'>{title}</h1>
        <p className='py-6 xsm:py-3 sm:py-2 lg:text-lg md:text-sm md:w-3/4 xsm:w-3/4 sm:text-xs xsm:text-sm xl:text-2xl xl:w-2/4 lg:w-2/4'>{overview}</p>
        <div className='my-1'>
            {/* <button className='px-6 py-4 hover:bg-opacity-80 bg-white text-black font-bold text-lg'> ▶️ Play</button> */}
            <Link to={`${id}`}><button className='px-6 sm:py-1 xsm:py-2 md:py-4 hover:bg-opacity-80 bg-gray-600 rounded-lg text-white font-bold text-lg'>Moreinfo</button></Link>
        </div>
    </div>
  )
}

export default VideoTitle