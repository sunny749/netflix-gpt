import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        mainMovie:null,
        telugu:null,
        topRated:null,
        popular:null,
        favourites:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload
        },
        addPopular:(state,action)=>{
            state.popular=action.payload
        },
        addTelugu:(state,action)=>{
            state.telugu=action.payload
        },
        addFavourites:(state,action)=>{
            state.favourites=action.payload
        },
        addMainMovie:(state,action)=>{
            state.mainMovie=action.payload
        }
    }
})

export const {addNowPlayingMovies,addMainMovie,addTrailerVideo,addTopRated,addPopular,addTelugu,addFavourites}=moviesSlice.actions

export default moviesSlice.reducer