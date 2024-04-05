import Header from "./Header"
import useAddMovies from "../Hooks/useAddMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import useAddTopRated from "../Hooks/useAddTopRated"
import useAddPopular from "../Hooks/useAddPopular"
import useAddTelugu from "../Hooks/useAddTeugu"
import useAddFavourites from "../Hooks/useAddFavourite"
import useAddMainMovie from "../Hooks/useAddMainMovie"

const Browse = () => {
  useAddMovies()
  useAddMainMovie()
  useAddTelugu()
  useAddTopRated()
  useAddPopular()
  useAddFavourites()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse