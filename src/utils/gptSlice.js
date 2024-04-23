import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        gptSearch:false,
        gptMovieNames:null,
        gptMovieResults:null,
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.gptMovieNames=null
            state.gptMovieResults=null
            state.gptSearch=!state.gptSearch
        },
        addMoviesAndResults:(state,action)=>{
            let {movieNames,movieResults}=action.payload
            state.gptMovieNames=movieNames
            state.gptMovieResults=movieResults
        }
    }
})

export const {toggleGptSearch,addMoviesAndResults}=gptSlice.actions

export default gptSlice.reducer