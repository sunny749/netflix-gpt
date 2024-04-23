import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from '../MoviesList'
import LoadingShimmer from './LoadingShimmer'

const GptSuggestions = () => {
    const {gptMovieNames,gptMovieResults}=useSelector(state=>state.gpt)
    if(gptMovieNames===null)return 
    if(gptMovieNames==='error')return <div className='text-white m-4 text-center p-4 bg-red-600'>Please search again some error occured</div>
    const dummy=new Array(5).fill(new Array(7).fill(null))
    if(gptMovieNames==='loading'){
    return(
        <div>
        <div className='w-[90%] mx-auto mt-4'>
            {
                dummy.map((outerarr,i)=> <LoadingShimmer key={i} arr={outerarr} />)
            }
        </div>
        </div>
    )
        }
  return (
    <div className='bg-black bg-opacity-85 text-white p-4 m-4'>
        {
            gptMovieNames.map((movie,index)=>{
                return <MoviesList key={movie} title={movie} movies={gptMovieResults[index]}/>
            })
        }
    </div>
  )
}

export default GptSuggestions