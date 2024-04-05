import { Api_Options } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/moviesSlice"
import { useEffect } from "react"

const useAddTrailer=(id)=>{
    const dispatch=useDispatch()
    const setTrailer=async()=>{
        try{
            const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,Api_Options)
            const json=await data.json()
            let filterdData=json.results.filter(video=>video.type==='Trailer')
            let trailer=filterdData.length?filterdData[0]:json.results[0]
            console.log(id,trailer,json.results)
            dispatch(addTrailerVideo(trailer))
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        setTrailer()
    },[])
}
export default useAddTrailer