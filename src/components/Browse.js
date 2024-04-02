import Header from "./Header"
import useFetchAndAdd from "../Hooks/useFetchAndAdd"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useDispatch } from "react-redux"

const Browse = () => {
  const dispatch=useDispatch()
  let results=useFetchAndAdd('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')
  dispatch(addNowPlayingMovies(results))
  if(results===null)return 
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse