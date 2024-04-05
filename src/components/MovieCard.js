import React from 'react'
import {IMG_CDN_URL} from '../utils/constants'

const MovieCard = ({movie}) => {
    if(movie.poster_path===null)return
  return (
    <div className='w-48 p-3 rounded-lg'>
        <div className='hover:w-40'>
        <img src={IMG_CDN_URL+movie.poster_path} alt="" />
        </div>
    </div>
  )
}

export default MovieCard