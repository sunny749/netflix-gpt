import { useDispatch } from "react-redux"
import { addMovieCast } from "../utils/moviesSlice"
import { Api_Options } from "../utils/constants"
import { useEffect } from "react"
const useAddMovieCast=(id)=>{
    const dispatch=useDispatch()
    let getMovie=async ()=>{
        let data= await fetch("https://api.themoviedb.org/3/movie/"+id+"/credits?language=en-US"+id,Api_Options)
        let json=await data.json()
        dispatch(addMovieCast(json.cast))
    }
    useEffect(()=>{
        getMovie()
        return ()=>{
            dispatch(addMovieCast(null))
        }
    },[])
}
export default useAddMovieCast