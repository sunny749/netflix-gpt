import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Api_Options } from "../utils/constants"
import { addTopRated } from "../utils/moviesSlice"

const useAddTopRated=()=>{
    const dispatch=useDispatch()
    const topRated =useSelector(state=>state.movies.topRated)
    const grtTopRated=async ()=>{
        try{
        let json=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', Api_Options)
        let data=await json.json()
        dispatch(addTopRated(data.results))
        }
        catch(error){
        console.log(error)
        }
    }
    useEffect(()=>{
        if(topRated===null){ 
            grtTopRated()}
    },[])

}

export default useAddTopRated