import React from 'react'
import { lang } from '../../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { GEMINI_AI_KEY } from '../../utils/constants'
import { Api_Options } from '../../utils/constants'
import { addMoviesAndResults } from '../../utils/gptSlice'

const GptSearchBar =() => {
    const dispatch=useDispatch()
    const inputRef=useRef(null)
    const langRef=useRef(null)
    const currentLang=useSelector(state=>state.config.lang)
    const searchMovie=async (movie,year)=>{
        let data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&year=${year}&primary_release_year=${year}&include_adult=false`,Api_Options)
        let json=await data.json()
        return json.results
    }
    const handleClick=async ()=>{
        let input=inputRef.current.value
        if(input==='')return
        dispatch(addMoviesAndResults({movieNames:'loading',movieResults:'loading'}))
        let query='Act as a movie recommendation system and suggest some moves for querry'+input+'. only give me 5 movie names with comma separeted example: king,leo,vikram,rolex,dhelli'
        let geminiResponse=await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key='+GEMINI_AI_KEY,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                contents: [{
                  parts: [{
                    text: query
                  }]
                }]
              }),
        })
        let res
        try{
        res=await geminiResponse.json()
        if(!res.candidates[0].content){
            dispatch(addMoviesAndResults({movieNames:'error',movieResults:'error'}))
            return
        }
        }
        catch(error){
            dispatch(addMoviesAndResults({movieNames:'error',movieResults:'error'}))
        }

        let moviesArray=res?.candidates[0]?.content?.parts[0]?.text?.split(',')
        let getMovies=moviesArray.map(movie=>searchMovie(movie))

        let moviesRes=await Promise.all(getMovies)
        dispatch(addMoviesAndResults({movieNames:moviesArray,movieResults:moviesRes}))
    }
  return (
    <div className='flex justify-center'>
    <div className='sm:mt-[9%] xsm:mt-[14%] sm:w-2/3 xsm:w-2/3 xsm:h-20 sm:min-h-16 sm:h-[7%] grid grid-cols-12 bg-black'>
        <input ref={inputRef} className='col-span-9 px-2 m-2 rounded-lg' placeholder={lang[currentLang].gptSearchPlaceholder} type="text" />
        <button onClick={handleClick} className='col-span-3 m-2 bg-red-600 rounded-lg text-white'>{lang[currentLang].search}</button>
    </div>
    </div>
  )
}

export default GptSearchBar