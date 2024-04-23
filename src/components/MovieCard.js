import React from 'react'
import {IMG_CDN_URL} from '../utils/constants'
import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => {
    if(movie.poster_path===null)return
  return (
    <div className='w-48 p-3 rounded-lg'>
        <div className='hover:w-40'>
        <Link to={`${movie.id}`}><img src={IMG_CDN_URL+movie.poster_path} alt="" /></Link>
        </div>
    </div>
  )
}

export default MovieCard