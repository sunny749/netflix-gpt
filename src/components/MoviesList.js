import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({title,movies}) => {
  return (
    <div className='bg-transparent'>
        <h1 className='text-white md:text-3xl text-lg pl-11 py-4'>{title}</h1>
    <div className='pl-11 flex overflow-x-scroll '>
        <div className='flex items-center'>
            {
                movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)
            }
        </div>
    </div>
    </div>
  )
}

export default MoviesList