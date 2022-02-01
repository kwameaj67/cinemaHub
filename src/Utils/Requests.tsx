import axios from 'axios';
import { POPULAR_API, TOP_RATED_API } from '../config';
// import { PopularMovie } from './Data'


export const getPopularMovies = async (page: number) => {
    const res = await axios.get(POPULAR_API + `&page=${page}`)
    const data = res.data.results
    return data
}

export const getTopRateMovies = async () => {
    const result = new Promise((resolve, reject) => {
        resolve(axios.get(TOP_RATED_API))
    })
    return result
}

