import { useState } from "react"
import { useEffect } from "react"
import { Api_Options } from "../utils/constants"

const useFetchAndAdd=(api)=>{
    const [state,setState]=useState(null)
    const getMoviesList=async ()=>{
        try{
        let json=await fetch(api, Api_Options)
        let data=await json.json()
        setState(data.results)
        }
        catch(error){
        console.log(error)
        }
    }
    useEffect(()=>{
        getMoviesList()
    },[])
    return state
}

export default useFetchAndAdd