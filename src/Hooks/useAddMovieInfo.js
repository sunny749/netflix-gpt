import { useDispatch } from "react-redux"
import { addMainMovie } from "../utils/moviesSlice"
import { Api_Options } from "../utils/constants"
import { useEffect } from "react"
const useAddMovieInfo=(id)=>{
    const dispatch=useDispatch()
    let getMovie=async ()=>{
        let data= await fetch("https://api.themoviedb.org/3/movie/"+id,Api_Options)
        let json=await data.json()
        dispatch(addMainMovie(json))
    }
    useEffect(()=>{
        getMovie()
        return ()=>{
            dispatch(addMainMovie(null))
        }
    },[])
}
export default useAddMovieInfo