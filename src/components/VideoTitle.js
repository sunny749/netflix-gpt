import React,{useState} from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] pl-11 absolute z-20 w-full overflow-hidden -mt-[5%] aspect-video text-white bg-gradient-to-br from-black to-transparent'>
        <h1 className='text-5xl font-bold w-1/2'>{title}</h1>
        <p className='py-6 text-lg w-2/4'>{overview}</p>
        <div className='my-1'>
            <button className='px-6 py-4 hover:bg-opacity-80 bg-white text-black font-bold text-lg'> ▶️ Play</button>
            <button className='px-6 py-4 ml-2 hover:bg-opacity-80 bg-gray-600 text-white font-bold text-lg'>Moreinfo</button>
        </div>
    </div>
  )
}

export default VideoTitle