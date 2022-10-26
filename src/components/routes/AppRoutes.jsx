import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import App from '../../App'
import { ResgisterPageNavbar } from '../molecules/registerPageNavbar/ResgisterPageNavbar'
import {LoginPageNavbar} from '../molecules/sesionPageNabvar/SesionPageNavbar'

export const AppRoutes = () => {
  return (
    <Routes>
            <Route path="login" element={ <LoginPageNavbar/>  } />
            <Route path="register" element={<ResgisterPageNavbar />} />
            <Route path="home" element={<App />} />


            <Route path='/*' element={<Navigate to="/home"/>}/>
    </Routes>
  )
}
