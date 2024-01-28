//Bibliotecas externas
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from '../pages/notfound'
import HomeScreen from '../pages/homescreen'
import Pokedex from '../pages/pokedex'

export default function Rotas(){

    return(
        <BrowserRouter
        basename='/pokedex'
        >
            <Routes>
                <Route
                path="*"
                element={
                    <NotFound/>
                }
                />
                <Route
                path='/'
                element={
                    <HomeScreen/>
                }
                />
                <Route
                path="/pokedex"
                element={
                    <Pokedex/>
                }
                />
            </Routes>
        </BrowserRouter>
    )

}