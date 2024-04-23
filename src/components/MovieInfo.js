import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import { IMG_CDN_FOR_BACKGROUND, IMG_CDN_URL } from '../utils/constants'
import useAddMovieInfo from '../Hooks/useAddMovieInfo'
import { useParams } from 'react-router-dom'
import MovieCast from './MovieCast'
import MovieInfoCard from './MovieInfoCard'
import useAddMovieCast from '../Hooks/useAddMovieCast'

const MovieInfo = () => {
    const {movieId}=useParams()
    useAddMovieInfo(movieId)
    useAddMovieCast(movieId)
    const mainMovie=useSelector(state=>state.movies.mainMovie)
    if(mainMovie===null)return
  return (
    <div>
    <Header/>
    <div>
    <div className="relative"></div>
        <div className='fixed -z-10 xsm:-bottom-[90%] xsm:-right-[80%] top-0 left-0 right-0 bottom-0 bg-black opacity-50'></div>
        <img className='w-full  h-full fixed object-cover object-center -z-20' src={IMG_CDN_FOR_BACKGROUND+mainMovie.backdrop_path} alt="" />
    </div>
    <div className='absolute w-full sm:top-[25%] sm:left-[0] xsm:top-[15%] xsm:left-0'>
        <MovieInfoCard />
        <MovieCast/>
    </div>
    </div>
  )
}

{/* <div>
        <img className='fixed h-[144%] w-[144%] -z-20 object-cover xsm:w-[180vw] xsm:h-[180vh]' src={IMG_CDN_FOR_BACKGROUND+mainMovie.backdrop_path} alt="" />
        <div className="absolute inset-0 h-[100vh] -z-10 bg-black opacity-50"></div>
        <div className='flex xsm:w-full sm:w-[90%] xsm:h-[25%] sm:h-[50%] text-white fixed xsm:top-[10%] xsm:left-0 sm:top-[20%] sm:left-[5%] mx-auto bg-black bg-opacity-40'>
            <img className='h-[100%] w-[30%]' src={IMG_CDN_URL+mainMovie.poster_path} alt='movie poster'/>
            <div>
            <h1 className='sm:px-4 sm:mx-4 p-4 m-4 lg:text-5xl md:text-3xl sm:text-2xl xsm:text-2xl font-bold'>{mainMovie.title}<span className='lg:text-2xl xsm:text-lg md:text-xl'>({mainMovie.release_date.split('-')[0]})</span></h1>
            <div className='pl-4 ml-4'>
            <span className='lg:text-2xl md:text-xl sm:text-lg xsm:text-lg'>Date: </span>
            <span className='lg:text-md md:text-sm sm:text-xs xsm:text-xs mr-1 text-gray-300 py-2 px-4 hover:border hover:border-white bg-opacity-70 bg-black rounded-3xl'>{mainMovie.release_date.split('-').reverse().join('-')}</span>
            <span className='lg:text-2xl md:text-xl sm:text-lg xsm:text-lg'>Genres: </span>
            {mainMovie.genres.map((movie,i)=>{
                if(i>=3)return
                return <span className='lg:text-md md:text-sm sm:text-xs xsm:text-xs text-gray-300 py-2 px-4 hover:border hover:border-white bg-opacity-70 mr-1 bg-black rounded-3xl'>{movie.name}</span>

            })}
            <span className='lg:text-2xl md:text-xl sm:text-lg xsm:text-lg'>Duration: </span>
            <span className='lg:text-md md:text-sm sm:text-xs xsm:text-xs text-gray-300 py-2 px-4 hover:border hover:border-white bg-opacity-70 bg-black rounded-3xl'>{mainMovie.runtime}min</span>

            </div>
            <div className='md:py-6 sm:py-1  xsm:py-1'>
            {mainMovie.tagline&&<span className='pl-4 ml-4 lg:text-3xl md:text-2xl sm:text-xl  xsm:text-xl'>Tagline :</span>}
            {mainMovie.tagline&&<span className='pl-2 lg:text-2xl md:text-xl sm:text-lg xsm:text-lg text-gray-300'>"{mainMovie.tagline}"</span>}
            </div>
            <div >
                <span className='pl-4 ml-4 lg:text-3xl md:text-2xl sm:text-xl xsm:text-xl'>overview :</span>
                <div className='pl-4 ml-4 text-wrap lg:text-lg md:text-md sm:text-sm xsm:text-sm text-gray-300'>{mainMovie.overview}</div>
            </div>
            </div>
        </div>
    </div> */}

export default MovieInfo