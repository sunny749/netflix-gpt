import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../utils/constants'

const MovieInfoCard = () => {
    const mainMovie=useSelector(state=>state.movies.mainMovie)
    if(mainMovie===null)return
  return (
    <div className='text-white'>
        <div className='xsm:w-[180vw] sm:flex sm:w-[90%] sm:mx-auto'>
            <img className='xsm:w-4/12 xsm:rounded-lg xsm:mx-auto sm:w-[25%] object-contain' src={IMG_CDN_URL+mainMovie.poster_path} alt="" />
            <div className='px-4 mx-4 '>
            <h1 className='xsm:text-center xsm:mt-4 lg:text-5xl md:text-3xl sm:text-2xl xsm:text-5xl font-bold'>{mainMovie.title}<span className='lg:text-2xl xsm:text-2xl sm:text-sm md:text-xl'>({mainMovie.release_date.split('-')[0]})</span></h1>
            <div className='xsm:mt-5 sm:mt-3 flex-col sm:flex-row'>
                <div className='xsm:block xsm:mb-4 sm:inline'>
                    <span className='lg:text-2xl md:text-xl sm:text-lg xsm:text-3xl'>Date : </span>
                    <span className='lg:text-md xsm: md:text-sm sm:text-xs xsm:text-xl mr-1 text-gray-300 sm:py-1 sm:px-2 py-2 px-4 hover:border hover:border-white hover:bg-opacity-45 bg-opacity-80 bg-black rounded-3xl'>{mainMovie.release_date.split('-').reverse().join('-')}</span>
                </div>
                <div className='xsm:block xsm:mb-4 sm:inline'>
                    <span className='lg:text-2xl md:text-xl sm:text-lg xsm:text-3xl'>Genres : </span>
                    {mainMovie.genres.map((movie,i)=>{
                        if(i>=3)return
                        return <span className='lg:text-md md:text-sm sm:text-xs xsm:text-xl mr-1 text-gray-300 sm:py-1 sm:px-2 py-2 px-4 hover:border hover:border-white hover:bg-opacity-45 bg-opacity-80 bg-black rounded-3xl'>{movie.name}</span>
                    })}
                </div>
                <div className='xsm:block xsm:mb-4 sm:inline'>
                    <span className='lg:text-2xl md:text-xl sm:text-lg xsm:text-3xl'>Duration : </span>
                    <span className='lg:text-md md:text-sm sm:text-xs xsm:text-xl mr-1 text-gray-300 sm:py-1 sm:px-2 py-2 px-4 hover:border hover:border-white hover:bg-opacity-45 bg-opacity-80 bg-black rounded-3xl'>{mainMovie.runtime}min</span>
                </div>
                <div className='md:mt-4 sm:py-1  xsm:py-1'>
                {mainMovie.tagline&&<span className='lg:text-3xl md:text-2xl sm:text-xl  xsm:text-3xl'>Tagline :</span>}
                {mainMovie.tagline&&<span className='pl-2 lg:text-2xl md:text-xl sm:text-lg xsm:text-xl text-gray-300'>"{mainMovie.tagline}"</span>}
                </div>
                <div className='md:mt-2 xsm:py-1'>
                    <span className=' lg:text-3xl md:text-2xl sm:text-xl xsm:text-3xl'>overview :</span>
                    <div className=' text-wrap lg:text-lg md:text-md sm:text-sm xsm:text-xl text-gray-300'>{mainMovie.overview}</div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MovieInfoCard