import React from 'react'
import { Link } from 'react-router-dom'
// import { Padlock } from '../../../atoms/Padlock'
import { SibarHome } from '../../../molecules/homeSibar/SibarHome'
import LockIcon from '@mui/icons-material/Lock';


import './homeViewRoues.css'
export const HomeViewRoutes = () => {
  return (
    <>
      {/* <div className='containerRoutes' >HomeViewRoutes</div> */}
      <div className="content-home-view-routes">
        <div className="content-progres">
        <div className="content-colum-one">
          <Link to='/content-video-route' className='content-view-routes-padlock'><LockIcon className='icon-lock'/></Link>
          <Link to='/content-video-route' className='content-view-routes-padlock'><LockIcon className='icon-lock'/></Link>
          <Link to='/content-video-route' className='content-view-routes-padlock'><LockIcon className='icon-lock'/></Link>
        </div>
        <div className="content-colum-two">
          <Link to='/content-video-route' className='content-view-routes-padlock'><LockIcon className='icon-lock'/></Link>
          <Link to='/content-video-route' className='content-view-routes-padlock'><LockIcon className='icon-lock'/></Link>
          <Link to='/content-video-route' className='content-view-routes-padlock'><LockIcon className='icon-lock'/></Link>
          <Link to='/content-video-route' className='content-view-routes-padlock'><LockIcon className='icon-lock'/></Link>
        </div>
        <div className="content-colum-three">
          <Link to='/content-video-route' className='content-view-routes-padlock'><LockIcon className='icon-lock'/></Link>
          <Link to='/content-video-route' className='content-view-routes-padlock'><LockIcon className='icon-lock'/></Link>
          <Link to='/content-video-route' className='content-view-routes-padlock'><LockIcon className='icon-lock'/></Link>
          
        </div>
        </div>
      </div>
      <SibarHome/>
    </>
   
  )
}
