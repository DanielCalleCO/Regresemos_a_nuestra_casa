import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";

import "./Carousel.css";
import CarouselItem1 from "../../molecules/carouselItem1/CarouselItem1";
import CarouselItem2 from "../../molecules/carouselItem2/CarouselItem2";
import CarouselItem3 from "../../molecules/carouselItem3/CarouselItem3";

export default function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
    },
    {
      name: "Random Name #4",
      description: "Hello World!",
    },
  ];

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
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
      <CarouselItem1 />
      <CarouselItem2 />
      <CarouselItem3 />
    </Carousel>
  );
}

function Item(props) {
  return (
    <div className="carouselItem">
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </div>
  );
}

function HorizontalLineIcon(props) {
  return <div className="indicatorIcon">.</div>;
}
