import { configureStore } from '@reduxjs/toolkit'
import popularMovieReducer from '../slices/popularMovieSlice'


const allReducers = ({
    popularMovies: popularMovieReducer
})

const reduxStore = configureStore({
    reducer:allReducers,
    devTools:true
})
export type RootState = ReturnType<typeof reduxStore.getState>
export default reduxStore;