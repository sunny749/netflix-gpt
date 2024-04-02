import React from 'react'
import useFetchAndAdd from '../Hooks/useFetchAndAdd'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'

const VideoBackground = ({id}) => {
    const dispatch=useDispatch()
    // const trailer=useSelector(state=>state.movies.trailerVideo)
    let results=useFetchAndAdd(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
    if(results===null)return
    let filterdData=results.filter(video=>video.type='Trailer')
    console.log(results)
    let trailer=filterdData.length?filterdData[filterdData.length-1]:results[0]
    dispatch(addTrailerVideo(trailer))
  return (
    <div>
        <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture;" 
        referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground