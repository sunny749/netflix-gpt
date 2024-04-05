import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { Api_Options } from "../utils/constants"
import { addMainMovie } from "../utils/moviesSlice"

const useAddMainMovie=()=>{
    const dispatch=useDispatch()
    const getMainMovie=async ()=>{
        try{
        let json=await fetch('https://api.themoviedb.org/3/search/movie?query=salaar&language=te&include_adult=false&page=1', Api_Options)
        let data=await json.json()
        dispatch(addMainMovie(data.results))
        }
        catch(error){
        console.log(error)
        }
    }
    useEffect(()=>{
        getMainMovie()
    },[])

}

export default useAddMainMovie