import React from 'react'
import { lang } from '../../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const currentLang=useSelector(state=>state.config.lang)
  return (
    <div className='flex justify-center'>
    <div className='sm:mt-[9%] xsm:mt-[14%] sm:w-2/3 xsm:w-full absolute min-h-16 h-[7%] grid grid-cols-12 bg-black'>
        <input className='col-span-9 px-2 m-2 rounded-lg' placeholder={lang[currentLang].gptSearchPlaceholder} type="text" name="" id="" />
        <button className='col-span-3 m-2 bg-red-600 rounded-lg text-white'>{lang[currentLang].search}</button>
    </div>
    </div>
  )
}

export default GptSearchBar