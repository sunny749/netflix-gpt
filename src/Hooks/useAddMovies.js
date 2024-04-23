import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Api_Options } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/moviesSlice"

const useAddMovies=()=>{
    const dispatch=useDispatch()
    const nowPlaying=useSelector(state=>state.movies.nowPlayingMovies)
    const getMoviesList=async ()=>{
        try{
        let json=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', Api_Options)
        let data=await json.json()
        dispatch(addNowPlayingMovies(data.results))
        }
        catch(error){
        console.log(error)
        }
    }
    useEffect(()=>{
        if(nowPlaying===null){
            getMoviesList()
        }
    },[])

}

export default useAddMovies