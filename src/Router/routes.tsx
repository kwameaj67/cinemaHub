import React from 'react'
import {Route, Routes }from 'react-router-dom'
import { HomePage } from '../Pages/index'

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    )
}

export default MainRouter
