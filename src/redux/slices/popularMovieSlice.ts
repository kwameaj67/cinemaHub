import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const getPopularMovies = createAsyncThunk(
    'movies/getPopularMoviesAsync',
    async () => {
        
    }
)

const popularMovieSlice = createSlice({
    name: 'popularMovies',
    initialState: [],
    reducers: {
        addPopularMovieAction: (state, action) => {

        }
    }
})

export const { addPopularMovieAction } = popularMovieSlice.actions
export default popularMovieSlice.reducer