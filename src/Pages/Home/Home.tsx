import React, { FC, useEffect, useState } from 'react'
import './home.css'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
// import Footer from '../../components/Footer/Footer'
import { PopularMovie } from '../../Utils/Data'
import { POPULAR_API, IMG_API } from '../../config'
import moment from 'moment'
import { FcRating } from 'react-icons/fc'
import { HiOutlineArrowNarrowUp } from 'react-icons/hi'


const HomePage: FC = () => {
    const [popularMovie, setPopularMovie] = useState<PopularMovie[]>([]);
    // eslint-disable-next-line
    const [page, setPage] = useState<number>(1);
    const [visible, setVisible] = useState<boolean>(false);

    const getPopularMovies = async (page: number) => {
        const res = await axios.get(POPULAR_API + `&page=${page}`)
        const data = res.data.results
        setPopularMovie(data)
    }


    console.log(popularMovie)


    // eslint-disable-next-line
    const moveToNextPage = () => {
        if (page === 1) {
            setPage(2)
            getPopularMovies(2)
        } else {
            setPage(1)
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
            setVisible(true)
        } else {
            setVisible(false)
        }

    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
        getPopularMovies(1)

        return () => {
            window.removeEventListener("scroll", listenToScroll)
        }
    }, []);

    return (
        <div className="home_container">
            <Navbar />
            <div className="popular_section">
                {
                    visible && (
                        <button className="scroll_button" onClick={scrollToTop}>
                            <HiOutlineArrowNarrowUp size={22} color="white" />
                        </button>
                    )
                }
                <div className="row">
                    {popularMovie.length > 0 ?
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
                        </>
                        : <p>There's no data available</p>
                    }
                </div>
                <div className="pagination_container">
                    <div className="pages">
                        <ul>
                            <li><button className={page === 1 ? 'active' : 'button'} onClick={moveToNextPage}>1</button></li>
                            <li><button className={page === 2 ? 'active' : 'button'} onClick={moveToNextPage}>2</button></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage
