import React from 'react'
import { HomeConetentLeft } from '../../../molecules/homeContent/homeContentLeft/HomeConetentLeft'
import { HomeContentRight } from '../../../molecules/homeContent/homeContentRight/HomeContentRight'
import { SibarHome } from '../../../molecules/homeSibar/SibarHome'

import './homeViewContent.css'
export const HomeContent = () => {
  return (
    <>    <div className="contentView">
            <HomeConetentLeft/>
            <HomeContentRight/>
          </div>
         <SibarHome/>
    </>
  )
}
