import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({title,movies}) => {
  return (
    <div className='bg-transparent py-4'>
        <h1 className='text-white md:text-2xl text-lg pl-11 sm:py-4 xsm:py-2'>{title}</h1>
        <div className='pl-11 flex overflow-x-scroll scrollbar-hide'>
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