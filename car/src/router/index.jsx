import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import {Cars} from "../pages/cars"
import { Carinfo } from '../pages/carinfo'
import { Register } from '../pages/register'

export  function RouteWrraper() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/carinfo" element={<Carinfo />} />
                <Route path="/register" element={<Register /> } />
            </Routes>
        </>

    )
}
