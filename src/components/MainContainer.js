import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies=useSelector(state=>state.movies?.nowPlayingMovies) 
    if(movies===null) return
    const mainMove=movies[0]
    console.log(movies)
    const {original_title, overview ,id }=mainMove
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer