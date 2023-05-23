import React from "react";
import Ad from "../components/ads/ad";
import MainBanner from "../components/cards/banner/mainBanner";
import CardOne from "../components/cards/productCards/cardOne";
import CardTwo from "../components/cards/productCards/cardTwo";
import Carousel from "../components/carousel/carousel";
import Directory from "../components/directories/directory";
import Footer from "../components/footer/footer";
import TextCard from "../components/textCard/textCard";
import images from "../components/utls/images";
import Navbar from "../components/navbar/navbar";

const Home = () => {
  return (
    <div>
      <Navbar theme="dark" />
      <Ad />
      <div className="md:flex-col md:flex md:justify-center md:items-center ">
        <MainBanner
          color="white"
          message="Pro Beyond"
          title="iPhone 14 Pro"
          image={images.banner1}
        />
        <MainBanner
          color="black"
          message="Pro Beyond"
          title="iPhone 13 Pro"
          image={images.banner2}
        />
        <MainBanner
          color="white"
          message="Pro Beyond"
          title="iPhone 12 Pro"
          image={images.banner3}
        />
        <div className="md:grid md:grid-cols-2 gap-x-2 md:p-2 ">
          <CardOne
            color="black"
            message="Pro Beyond"
            title="iPhone 12 Pro"
            image={images.banner4}
          />
          <CardTwo
            color="white"
            message="Pro Beyond"
            title="iPhone 12 Pro"
            image={images.banner8}
          />
          <CardOne
            color="black"
            message="Pro Beyond"
            title="iPhone 12 Pro"
            image={images.banner6}
          />
          <CardOne
            color="white"
            message="Pro Beyond"
            title="iPhone 12 Pro"
            image={images.banner7}
          />
          <CardOne
            color="white"
            message="Pro Beyond"
            title="iPhone 12 Pro"
            image={images.banner5}
          />
          <CardOne
            color="black"
            message="Pro Beyond"
            title="iPhone 12 Pro"
            image={images.banner9}
          />
        </div>
        <Carousel />
        <TextCard />
        <Directory />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
