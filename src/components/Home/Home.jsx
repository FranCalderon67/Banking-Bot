import React from "react";
import "./home.css";
import Carousel from "../Carousel/Carousel";
import Options from "../Options/Options";
import Body from "../Body/Body";

function Home() {
  return (
    <>
      <Carousel />
      <Options />
      <Body />
    </>
  );
}

export default Home;
