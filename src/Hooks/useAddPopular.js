import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { Api_Options } from "../utils/constants"
import { addPopular } from "../utils/moviesSlice"

const useAddPopular=()=>{
    const dispatch=useDispatch()
    const getPopular=async ()=>{
        try{
        let json=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', Api_Options)
        let data=await json.json()
        dispatch(addPopular(data.results))
        }
        catch(error){
        console.log(error)
        }
    }
    useEffect(()=>{
        getPopular()
    },[])

}

export default useAddPopular