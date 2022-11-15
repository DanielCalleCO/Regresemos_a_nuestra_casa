import React from 'react'
import { HomeContentRight } from '../../../molecules/homeContent/homeContentRight/HomeContentRight'
import { HomeFolderView } from '../../../molecules/homeFolder/HomeFolderView'
import { ComponentRigth } from '../../../molecules/homeRoute/componentRigth/ComponentRigth'
import { SibarHome } from '../../../molecules/homeSibar/SibarHome'


import './homeViewFolder.css'

export const HomeViewFolder = () => {
  return (
    <>
        <div className="content-folder">
           <SibarHome/>
           <HomeFolderView/>
        |<HomeContentRight/>
        </div>
    </>
  )
}
