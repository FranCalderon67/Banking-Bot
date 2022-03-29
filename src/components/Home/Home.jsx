import React from "react";
import "./home.css";
import NavBar from "../Navbar/NavBar";
import Carousel from "../Carousel/Carousel";
import Options from "../Options/Options";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Carousel />
      <Options />
      <Body />
      <Footer />
    </>
  );
}

export default Home;
