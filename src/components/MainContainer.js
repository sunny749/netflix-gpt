import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies=useSelector(state=>state.movies.nowPlayingMovies) 
    if(movies===null) return
    const mainMovie=movies[Math.floor(Math.random()*movies.length)]
    const {original_title, overview ,id }=mainMovie
  return (
    <div className='w-full h-full overflow-hidden  relative'>
        <VideoTitle title={original_title} overview={overview} id={id}/>
        <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer