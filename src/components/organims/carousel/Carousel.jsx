import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";

// import "./Carousel.css";
import CarouselItem1 from "../../molecules/carouselItem1/CarouselItem1";
import CarouselItem2 from "../../molecules/carouselItem2/CarouselItem2";
import CarouselItem3 from "../../molecules/carouselItem3/CarouselItem3";

export default function Example(props) {
 
  return (
    <Carousel
      height={"100vh"}
      indicatorContainerProps={{ className: "containerIndicatorButtons" }}
      indicatorIconButtonProps={{ className: "indicatorButtons" }}
      activeIndicatorIconButtonProps={{ className: "activeIndicatorButtons" }}
      navButtonsProps={{ className: "navbuttons" }}
      IndicatorIcon={<HorizontalLineIcon />}
      stopAutoPlayOnHover={false}
      interval={8000}
      navButtonsAlwaysVisible={true}
      animation={'slide'}
    >
      
      <CarouselItem1 />
      <CarouselItem2 />
      <CarouselItem3 />
    </Carousel>
  );
}


function HorizontalLineIcon(props) {
  return <div className="indicatorIcon">.</div>;
}
