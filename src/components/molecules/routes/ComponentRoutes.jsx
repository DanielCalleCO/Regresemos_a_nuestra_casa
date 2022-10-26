import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ResgisterPageNavbar } from '../registerPageNavbar/ResgisterPageNavbar'
import { SesionPageNavbar } from '../sesionPageNabvar/SesionPageNavbar'

export const ComponentRoutes = () => {
  return (
    <Routes>
                        <Route path='inicialSesion' element={<SesionPageNavbar/> }/>

                        <Route path='registrerSesion' element={<ResgisterPageNavbar/>}/>
    </Routes>
)}
