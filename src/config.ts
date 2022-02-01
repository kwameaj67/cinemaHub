export const API = "f0f1092abbf53366865f40d48d2aa6f3"

export const IMG_API = 'https://image.tmdb.org/t/p/w1280';

export const API_REQUEST1 = `https://api.themoviedb.org/3/movie/76341?api_key=${API}`

// export const POPULAR_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US`
export const POPULAR_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API}&language=en-US`

export const TOP_RATED_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&language=en-US`

export const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGYxMDkyYWJiZjUzMzY2ODY1ZjQwZDQ4ZDJhYTZmMyIsInN1YiI6IjYxNWRhNTM1NjllYjkwMDAyYTJkZjA3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SBq6GP8a9wpQhN1jU1zIm9yaHoMsE-c25mpG_s7MVT8"

export const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=`

export const API_VIDEOS = (movie_id:string) =>{
    return `https://api.themoviedb.org/3/movie/{${movie_id}}/videos?api_key=${API}&language=en-US`
}
export const IMAGE_API = (movid_id:number) => {
    return `https://api.themoviedb.org/3/movie/{${movid_id}}/images?api_key=${API}&language=en-US`
}

export const COLOR_API = `acc_3dcda88f0391d26`

export const API_COLORS = "https://api.imagga.com/v2/colors"
// https://imagga.com/solutions/color-api

// https://www.themoviedb.org/settings/api