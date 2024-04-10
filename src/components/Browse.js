import Header from "./Header"
import useAddMovies from "../Hooks/useAddMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import useAddTopRated from "../Hooks/useAddTopRated"
import useAddPopular from "../Hooks/useAddPopular"
import useAddTelugu from "../Hooks/useAddTeugu"
import useAddFavourites from "../Hooks/useAddFavourite"
import { useSelector } from "react-redux"
import GptSearchPage from "./gptComponents/GptSearchPage"

const Browse = () => {
  const gptSearch=useSelector(state=>state.gpt.gptSearch)
  useAddMovies()
  useAddTelugu()
  useAddTopRated()
  useAddPopular()
  useAddFavourites()
  return (
    <div className="w-screen">
      <Header />
      {gptSearch?<GptSearchPage />:<><MainContainer/>
      <SecondaryContainer/></>}
    </div>
  )
}

export default Browse