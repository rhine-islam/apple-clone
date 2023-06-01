import Ad from "../components/ads/ad";
import MainBanner from "../components/cards/banner/mainBanner";
import Card from "../components/cards/productCards/card";
import Carousel from "../components/carousel/carouselCard";
import Directory from "../components/directories/directory";
import Footer from "../components/footer/footer";
import TextCard from "../components/textCard/textCard";
import images from "../components/utls/images";
import Navbar from "../components/navbar/navbar";
import CarouselCard from "../components/carousel/carouselCard";

const Home = () => {
  return (
    <div>
      <Navbar theme="dark" />
      <div className="md:flex-col md:flex md:justify-center md:items-center ">
        <Ad />
        <MainBanner
          color="white"
          message="Pro Beyond"
          title="iPhone 14 Pro"
          desktopImg={images.banner1}
          mobileImg={images.mobileImg1}
        />
        <MainBanner
          color="black"
          message="Pro Beyond"
          title="iPhone 13 Pro"
          desktopImg={images.banner2}
          mobileImg={images.mobileImg2}
        />
        <MainBanner
          color="white"
          message="Pro Beyond"
          title="iPhone 12 Pro"
          desktopImg={images.banner3}
          mobileImg={images.mobileImg7}
        />
        <div className="space-y-3 md:grid md:grid-cols-2 gap-x-2 md:p-2 md:gap-y-3 md:space-y-0">
          <Card
            color="black"
            message="Upgrade and save. It's that easy"
            title="Trade In"
            desktopImg={images.banner4}
            mobileImg={images.mobileImg4}
            position="top"
            link="See what your device is worth"
          />
          <Card
            color="white"
            message="Apple Worldwide Developer Conference"
            title="WWDC23"
            desktopImg={images.banner5}
            mobileImg={images.mobileImg5}
            position="bottom"
            link="Learn More"
          />
          <Card
            color="black"
            message="Pride is in the air"
            title="WATCH"
            desktopImg={images.banner6}
            mobileImg={images.mobileImg6}
            position="top"
            link="Shop the new Pride Edition Sport Band"
          />
          <Card
            color="white"
            message="Supercharged M2 Pro and M2 Max"
            title="MacBook Pro"
            desktopImg={images.banner7}
            mobileImg={images.mobileImg7}
            position="top"
            link="Learn More"
          />
          <Card
            color="white"
            message="Privacy that is iPhone"
            title="Your Health data in your control"
            desktopImg={images.banner8}
            mobileImg={images.mobileImg8}
            position="top"
            link="Learn More"
          />
          <Card
            color="black"
            message="Get upto 3% Daily Cash Back"
            title="Card"
            desktopImg={images.banner9}
            mobileImg={images.mobileImg9}
            position="top"
            link="Learn More"
          />
        </div>
        <CarouselCard color="white" />
        <TextCard />
        <Directory color="dark" />
        <Footer color="dark" />
      </div>
    </div>
  );
};

export default Home;
