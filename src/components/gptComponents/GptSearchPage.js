import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'
import { BackGroundImg } from '../../utils/constants'

const GptSearchPage = () => {
  return (
        <div className="sm:w-[100%] xsm:w-[180%] xsm:h-[180vh] relative overflow-x-hidden sm:h-[100vh]">
         <div
    className="absolute inset-0  sm:w-[144%] sm:h-[144%] xsm:w-full min-h-[1000px] bg-cover sm:bg-top-left"
    style={{
      backgroundImage: `url(${BackGroundImg})`,
    }}
    
  ></div>
        <GptSearchBar/>
        <GptSuggestions />
      </div> 
        
  )
}

export default GptSearchPage