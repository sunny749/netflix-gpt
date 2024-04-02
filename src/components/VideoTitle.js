import React,{useState} from 'react'

const VideoTitle = ({title,overview}) => {
    const [info,setInfo]=useState(false)
  return (
    <div className='pt-[20%] pl-12 absolute text-white w-screen aspect-video'>
        <h1 className='text-5xl font-bold w-1/2'>{title}</h1>
        {info&&<p className='py-6 text-lg font-bold w-1/4'>{overview}</p>}
        <div className={info?'my-2':'my-10'}>
            <button className='px-6 py-4 hover:bg-opacity-80 bg-white text-black font-bold text-lg'> ▶️ Play</button>
            <button onClick={()=>setInfo(!info)} className='px-6 py-4 ml-2 hover:bg-opacity-80 bg-gray-600 text-white font-bold text-lg'>Moreinfo</button>
        </div>
    </div>
  )
}

export default VideoTitle