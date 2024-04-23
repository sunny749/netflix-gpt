import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Api_Options } from "../utils/constants"
import { addTelugu } from "../utils/moviesSlice"

const useAddTelugu=()=>{
    const dispatch=useDispatch()
    const telugu=useSelector(state=>state.movies.telugu)
    const getTeuguMovies=async ()=>{
        try{
        let json=await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_original_language=te&sort_by=popularity.desc', Api_Options)
        let data=await json.json()
        dispatch(addTelugu(data.results))
        }
        catch(error){
        console.log(error)
        }
    }
    useEffect(()=>{
       if(telugu===null){
         getTeuguMovies()}
    },[])

}

export default useAddTelugu