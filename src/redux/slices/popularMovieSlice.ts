import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { POPULAR_API } from '../../config'
import { IPopularMovie } from '../../Utils/Data'
import axios from 'axios'


export const fetchPopularMoviesAsync = createAsyncThunk(
    'movies/fetchPopularMoviesAsync',
    async (page: number) => {
        const res = await axios.get(POPULAR_API + `&page=${page}`)
        return res.data.results
    }
)
const initialState:Array<IPopularMovie> = []

const popularMovieSlice = createSlice({
    name: 'popularMovies',
    initialState: { movies: initialState },
    // initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPopularMoviesAsync.pending, (state, action) => {
            console.log("Fetching data pending...")
        })
        builder.addCase(fetchPopularMoviesAsync.fulfilled, (state, action) => {
            console.log("Fetching data successfully")
            state.movies.push(action.payload);
        })
        builder.addCase(fetchPopularMoviesAsync.rejected, (state, action) => {
            console.log("Error fetching data...")
        })
    }
})

export const { } = popularMovieSlice.actions
export default popularMovieSlice.reducer