import React, { FC, useEffect, useState } from 'react'
import './home.css'
import './responsive.css'
import Navbar from '../../components/Navbar/Navbar'
// import Footer from '../../components/Footer/Footer'
import { IPopularMovie } from '../../Utils/Data'
import { POPULAR_API, IMG_API, SEARCH_API } from '../../config'
import moment from 'moment'
import { FcRating } from 'react-icons/fc'
import { HiOutlineArrowNarrowUp } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopularMoviesAsync } from '../../redux/slices/popularMovieSlice'
import { RootState } from '../../redux/store/store'


const HomePage: FC = () => {
    const [popularMovie, setPopularMovie] = useState<IPopularMovie[]>([]);
    const [page, setPage] = useState<number>(1);
    const [scrollVisible, setScrollVisible] = useState<boolean>(false);
    const [searchVisible, setSearchVisible] = useState<boolean>(false);
    const [formVisible, setFormVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>("");

    const dispatch = useDispatch();
    // const data  = useSelector((state: RootState) => state.popularMovies)
    // console.log(movies) 

    const getPopularMovies =  async (page: number) => {
        setLoading(true)
        const response = await fetch(POPULAR_API + `&page=${page}`)
        let data = await response.json()
        console.log(data)
        setPopularMovie(data.results)
        setLoading(false)
    }
    const handleSearchSubmit = async (event: any) => {
        event.preventDefault()
        setLoading(true)
        const response = await fetch(SEARCH_API +searchText.toLowerCase() + `&page=${page}`)
        const data = await response.json();
        setPopularMovie(data.results)
        setLoading(false)
        setSearchVisible(false);
        setSearchText('')
        setPage(1)
    }
    const moveToNextPage = () => {
        console.log(page)
        if (page === 2) {
            getPopularMovies(2)
        } else if (page === 1) {
            getPopularMovies(1)
        }
        window.scrollTo(0, 0)
    }
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    const listenToScroll = () => {
        var y = window.scrollY;
        if (y >= 3000) {
            setScrollVisible(true)
        } else {
            setScrollVisible(false)
        }
    }
    const toggleSearchSection = () => {
        setSearchVisible(true)
    }
    const toggleFormSection = () => {
        setFormVisible(!formVisible)
    }
    
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
        getPopularMovies(page)
        dispatch(fetchPopularMoviesAsync(page))

        return () => {
            window.removeEventListener("scroll", listenToScroll)
        }
    }, [dispatch,page]);

    return (
        <div className="home_container">
            <Navbar
                onShowSearch={searchVisible}
                onShowLoginSignupForm={formVisible}
                onClickSearchButton={toggleSearchSection}
                onClickLoginButton={toggleFormSection}
            />
            {
                searchVisible &&
                <div className="search_section">
                    <div className="search_background">
                        <div className="search_content">
                            <button className="close_button" onClick={() => { setSearchVisible(false) }}>
                                <CgClose className="close_icon" size={20} />
                            </button>
                            <form className="search_input" onSubmit={handleSearchSubmit}>
                                <input autoFocus required type="search" value={searchText} placeholder="Enter anything " onChange={(e) => { setSearchText(e.target.value) }} />
                                <button  disabled={searchText.length <= 0 ? true : false}>Search <span>{searchText}</span></button>
                            </form>
                        </div>
                    </div>
                </div>
            }
            {
                popularMovie.length > 0 &&
                <div className="heading_section">
                    <div className="content">
                        <h1>Popular Movies 🍿 🎥</h1>
                    </div>
                </div>
            }
            <div className="popular_section">
                {
                    scrollVisible && (
                        <button className="scroll_button" onClick={scrollToTop}>
                            <HiOutlineArrowNarrowUp size={22} color="white" />
                        </button>
                    )
                }
                <div className="row">
                    {loading === false && popularMovie.length > 0 &&
                        <>
                            {popularMovie.map((item) => {
                                return (
                                    <div key={item.id} className="item">
                                        <div className="text">
                                            <h1 className="title">{item.title}</h1>
                                            <p className="overview">{item.overview.substring(0, 170)}...</p>
                                            <div className="other">
                                                <div className="rating">
                                                    <FcRating size={25} />
                                                    <div className="rating_text">
                                                        <p className="r_1">Rating</p>
                                                        <p className="r_2">{item.vote_average * 10}%</p>
                                                    </div>
                                                </div>
                                                <div className="published_date">
                                                    <p >Published on</p>
                                                    <p className="date">{moment(item.release_date).format('MMM DD,YYYY')}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img_container">
                                            <img src={`${IMG_API}${item.poster_path}`} alt={item.poster_path} className="img" />
                                        </div>

                                    </div>
                                )
                            })
                            }
                            <div className="pagination_container">
                                <div className="pages">
                                    <ul>
                                        <li><button className={page === 1 ? 'active' : 'button'}
                                            onClick={() => {
                                                setPage(1)
                                                moveToNextPage()
                                            }}>1</button></li>
                                        <li><button className={page === 2 ? 'active' : 'button'}
                                            onClick={() => {
                                                setPage(2)
                                                moveToNextPage()
                                            }}>2</button></li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    }
                    {loading === true && <p className="data_state">Fetching popular movies...</p>}
                    {loading === false && popularMovie.length === 0 && <p className="data_state">There's no movies available</p>}
                </div>

            </div>
        </div>
    )
}

export default HomePage
