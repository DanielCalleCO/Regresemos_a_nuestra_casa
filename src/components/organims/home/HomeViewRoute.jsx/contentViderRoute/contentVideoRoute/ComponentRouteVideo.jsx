import React from 'react'
import { ComponentCenter } from '../../../../../molecules/homeRoute/componentCenter/ComponentCenter'
import { ComponentLeft } from '../../../../../molecules/homeRoute/componentLeft/ComponentLeft'
import { ComponentRigth } from '../../../../../molecules/homeRoute/componentRigth/ComponentRigth'
import { SibarHome } from '../../../../../molecules/homeSibar/SibarHome'

import './componentRouteVideo.css'

export const ComponentRouteVideo = () => {
  return (
    <>
        <div className="contentVideoRoute">

                <SibarHome/>
                <ComponentLeft/>
                <ComponentCenter/>
                <ComponentRigth/>
        </div>
    </>
  )
}
