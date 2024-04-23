import React from 'react'
import useAddTrailer from '../Hooks/useAddTrailer'
import { useSelector } from 'react-redux'


const VideoBackground = ({id}) => {
    // console.log(id)
    useAddTrailer(id)
    const trailerVideo=useSelector(state=>state.movies.trailerVideo)
    if(trailerVideo===null)return
    const trailer=trailerVideo
  return (
    <div className='w-screen'>
        <iframe className='w-screen xsm:w-[180vw] -mt-[5%] -z-20 aspect-video overflow-hidden' src={"https://www.youtube-nocookie.com/embed/"+trailer?.key+"?autoplay=1&loop=1&mute=1&playlist="+trailer?.key}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture;" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        style={{overflow:'hidden'}}
        ></iframe>
    </div>
  )
}

export default VideoBackground