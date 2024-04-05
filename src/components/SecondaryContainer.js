import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const SecondaryContainer = () => {
    const movies=useSelector(state=>state.movies)
    if(movies.topRated===null)return
    if(movies.nowPlayingMovies===null)return
    if(movies.popular===null)return
    if(movies.telugu===null)return
    if(movies.favourites===null)return
  return (
    <div className='bg-black'>
        <div className='-mt-[15%] relative z-20'>
        <MoviesList title={'Now Playing'} movies={movies.nowPlayingMovies}/>
        <MoviesList title={'Telugu'} movies={movies.telugu}/>
        <MoviesList title={'Top Rated'} movies={movies.topRated}/>
        <MoviesList title={'Popular'} movies={movies.popular}/>
        <MoviesList title={'Favourites'} movies={movies.favourites}/>
        </div>
    </div>
  )
}

export default SecondaryContainer