import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const SecondaryContainer = () => {
    const topRated=useSelector(state=>state.movies.topRated)
    const nowPlayingMovies=useSelector(state=>state.movies.nowPlayingMovies)
    const popular=useSelector(state=>state.movies.popular)
    const telugu=useSelector(state=>state.movies.telugu)
    const favourites=useSelector(state=>state.movies.favourites)
    if(topRated===null)return
    if(nowPlayingMovies===null)return
    if(popular===null)return
    if(telugu===null)return
    if(favourites===null)return
  return (
    <div className='bg-black'>
        <div className='sm:-mt-[15%] xsm:-mt-[13%] relative z-20'>
        <MoviesList title={'Now Playing'} movies={nowPlayingMovies}/>
        <MoviesList title={'Telugu'} movies={telugu}/>
        <MoviesList title={'Top Rated'} movies={topRated}/>
        <MoviesList title={'Popular'} movies={popular}/>
        <MoviesList title={'Favourites'} movies={favourites}/>
        </div>
    </div>
  )
}

export default SecondaryContainer