import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeViewUser } from '../../atoms/HomeViewUser'
import { HomeView } from '../../organims/homeView/HomeView'
// import { HomeView } from '../homeView/HomeView'
import { ResgisterPageNavbar } from '../registerPageNavbar/ResgisterPageNavbar'
import { SesionPageNavbar } from '../sesionPageNabvar/SesionPageNavbar'

export const ComponentRoutes = () => {
  return (
    <Routes>
                        <Route path='inicialSesion' element={<SesionPageNavbar/> }/>

                        <Route path='registrerSesion' element={<ResgisterPageNavbar/>}/>
                        <Route path='homeview' element={<HomeView/>}/>
    </Routes>
)}
