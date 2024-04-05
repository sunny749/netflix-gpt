import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { Api_Options } from "../utils/constants"
import { addTelugu } from "../utils/moviesSlice"

const useAddTelugu=()=>{
    const dispatch=useDispatch()
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
        getTeuguMovies()
    },[])

}

export default useAddTelugu