import React from 'react'
// import FaceIcon from '@mui/icons-material/Face';
import { Face } from '@mui/icons-material';
import './user.css'
import { SibarHome } from '../../../molecules/homeSibar/SibarHome';


export const HomeViewUser = () => {
  return (
    <>
      <div className="containerTwo">

        <Face color='secundary' />
        <p className='parrafo'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A perferendis voluptatibus dolorum reprehenderit amet, omnis minima debitis sequi quisquam delectus libero. Possimus nobis quae facilis maiores molestias unde nostrum earum?</p>
      </div>
      <SibarHome/>
   
    </>
  )
}
