import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, MovieDetails } from '../Pages/index'

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
    )
}

export default MainRouter
