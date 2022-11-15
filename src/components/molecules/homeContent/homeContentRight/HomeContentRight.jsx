import React from 'react'
import './homeContentRigth.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export const HomeContentRight = () => {
  return (
    <>
        <div className="contentRigh">
           <div className="content-cita content-right">
              <h3>“¡Con razón nuestro corazón ardía, mientras nos hablaba por el camino y nos explicaba las Escrituras!”</h3>
              <p className='cita-biblica'>LUCAS 24:32</p>
           </div>
           <div className='content-right content-cita-two'>
              <p className='content-cita-two-text'>
                Las enseñanzas del Señor son perfectas, 
                <span> revivan el alma. los decretos del señor</span>
                <span>Son confiables; hacen sibario al sencillo</span>
                  <p className='cita-biblica-two'>SALMO 19:7</p>
              </p>
           </div>
           <div className='content-right content-memo'>
                <div className='f-one'>
                  <h3>Memoriza</h3>
                  <p className='f-one-paragraf'>Su palabra</p>
                </div>
                <div className='f-two'>
                    <p className='paragraf'>
                        @desafianterecords
                    </p> 
                  </div>
                <div className='f-three'> <PlayCircleOutlineIcon className='icon-play' sx={{ fontSize: 40 }}/></div>
           </div>
        </div>
    </>
  )
}
