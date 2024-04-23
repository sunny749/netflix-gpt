import React from 'react'

const LoadingShimmer = ({arr}) => {
  return (
    <div className=' bg-black relative flex overflow-x-scroll gap-4 py-2 animate-pulse'>
        <div className='absolute left-[5%] top-10 w-52 h-4 bg-gray-300 block '></div>
        {
            arr.map((val,i)=>{
                return (
                    <div>
                        <div key={i} className='mt-20 ml-10 w-48 h-60 bg-gray-400 '></div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default LoadingShimmer