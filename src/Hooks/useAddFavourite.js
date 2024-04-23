import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Api_Options } from "../utils/constants"
import { addFavourites } from "../utils/moviesSlice"

const useAddFavourites=()=>{
    const dispatch=useDispatch()
    const favourites=useSelector(state=>state.movies.favourites)
    const getFavourites=async ()=>{
        try{
        let json=await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&region=IN&sort_by=vote_count.desc&with_origin_country=IN&with_original_language=te', Api_Options)
        let data=await json.json()
        dispatch(addFavourites(data.results))
        }
        catch(error){
        console.log(error)
        }
    }
    useEffect(()=>{
        if(favourites===null){
            getFavourites()}
    },[])

}

export default useAddFavourites