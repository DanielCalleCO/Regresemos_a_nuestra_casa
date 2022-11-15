import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom'
import './componentRigth.css'


export const ComponentRigth = () => {
  return (
    <div className='div'>
            <div > 
                <iframe src="https://www.youtube.com/watch?v=8YTPJwcX9mo" frameborder="0" className='video-route'></iframe>
                <div className='content-interaction'>
                    <div>
                            <p>time video</p>
                            <span><StarIcon className='qualification'/></span>
                    </div>
                    <div className="button-contents">
                        <div className="container-content">
                            <Link className='container-button'>
                                <p className='button-content'>ACTIVIDAD</p>
                            </Link>
                        </div>
                        <div className="container-content terminar">
                            <Link className='container-button'>
                                <p className='button-content'>TERNIMAR</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}
