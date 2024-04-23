import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import Error from './Error'
import MovieInfo from './MovieInfo'



const Body = () => {
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login />
        },
        {
            path:'browse',
            element:<Browse />
        },
        {
          path:'browse/:movieId',
          element:<MovieInfo/>
        },
        {
          path:'error',
          element:<Error />
      },
    ])

  return (
    <div className=''>
    <RouterProvider router={appRouter} />
    </div>
  )
}
export default Body