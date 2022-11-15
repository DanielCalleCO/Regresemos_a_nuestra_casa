import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {App} from '../../App'
import { HomeView } from '../../pages/homeView/HomeView'


import { ResgisterPageNavbar } from '../molecules/registerPageNavbar/ResgisterPageNavbar'
import {LoginPageNavbar} from '../molecules/sesionPageNabvar/SesionPageNavbar'
import { HomeContent } from '../organims/home/homeContent/HomeContent'
import { HomeViewFavorit } from '../organims/home/homeViewFavorit/HomeViewFavorit'
import { HomeViewFolder } from '../organims/home/HomeViewFolder/HomeViewFolder'
import { ComponentRouteVideo } from '../organims/home/HomeViewRoute.jsx/contentViderRoute/contentVideoRoute/ComponentRouteVideo'
// import { HomeViewFolder } from '../organims/home/homeViewFolder/HomeViewFolder'
import { HomeViewRoutes } from '../organims/home/HomeViewRoute.jsx/HomeViewRoutes'
import { HomeViewUser } from '../organims/home/HomeViewUser.jsx/HomeViewUser'


export const AppRoutes = () => {
  return (
    <Routes>
            <Route path="login" element={ <LoginPageNavbar/>}/>
            <Route path="register" element={<ResgisterPageNavbar/>}/>
            <Route path="home" element={<App/>}/>
            <Route path="homeView" element={<HomeView/>}/>
            <Route path='user' element={<HomeViewUser/>}/>
            <Route path='home-Content' element={<HomeContent/>}/>
            <Route path='route' element={<HomeViewRoutes/>}/>
            <Route path='folder' element={<HomeViewFolder/>}/>
            <Route path='favorit' element={<HomeViewFavorit/>}/>
            <Route path='content-video-route' element={<ComponentRouteVideo /> }/>
            




            <Route path='/*' element={<Navigate to="/home"/>}/>
    </Routes>
  )
}
