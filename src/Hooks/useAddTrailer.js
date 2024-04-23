import { Api_Options } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideo } from "../utils/moviesSlice"
import { useEffect } from "react"

const useAddTrailer=(id)=>{
    const dispatch=useDispatch()
    const setTrailer=async(signal)=>{
        try{
            const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,{...Api_Options,signal})
            const json=await data.json()
            let filterdData=json.results.filter(video=>video.type==='Trailer')
            let trailer=filterdData.length?filterdData[0]:json.results[0]
            // console.log(json)
            dispatch(addTrailerVideo(trailer))
        }
        catch(error){
            if (error.name !== 'AbortError') {
                console.error('Error fetching trailer:', error);
              }
        }
    }
    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        setTrailer(signal)
        return () => {
            controller.abort();
          };
    },[id])
}
export default useAddTrailer