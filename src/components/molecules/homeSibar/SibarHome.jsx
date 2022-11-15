import { Bookmark, Face, Favorite, Folder, Home, Logout } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'



// import { MenuHomeView } from '../../molecules/homeView/menuLateral/MenuHomeView'
import './sibarHome.css'

// import { Link } from 'react-router-dom'
// import {FaceIcon} from '@mui/icons-material';
export const SibarHome = () => {


  return (
    <>
      {/* <MenuHomeView/> */}
        <div className="menu">
          
           <Link to='/user' > <Face className='faceIcon icon' />  </Link> 
            <div className="containerCentral">
               <Link  to='/home-Content'><Home className='icon'/> </Link> 
                <Link to='/route'> <Bookmark className='icon'/> </Link> 
               <Link   to='/folder'><Folder className='icon'/></Link> 
               <Link   to='/favorit'> <Favorite className='icon'/> </Link> 
            </div>
            <Link to='/home'> <Logout className='icon icon-exit'/></Link>
        </div>
    </>
  )
}

