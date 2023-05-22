import Ad from "./components/ads/ad";
import MainBanner from "./components/cards/banner/mainBanner";
import CardOne from "./components/cards/productCards/cardOne";
import CardTwo from "./components/cards/productCards/cardTwo";
import Carousel from "./components/carousel/carousel";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Ad />
      <div className="md:flex-col md:flex md:justify-center md:items-center">
        <MainBanner
          color="white"
          message="Pro Beyond"
          title="iPhone 14 Pro"
          image="./assets/images/banner/hero_iphone14pro_spring__9xo85pm6sbmm_largetall.jpg"
        />
        <MainBanner
          color="black"
          message="Pro Beyond"
          title="iPhone 13 Pro"
          image="./assets/images/banner/hero_iphone14_yellow__eun20sn4imi6_largetall.jpg"
        />
        <MainBanner
          color="white"
          message="Pro Beyond"
          title="iPhone 12 Pro"
          image="./assets/images/banner/hero_apple_watch_series_8_spring__b1y8wb7xjc9y_largetall.jpg"
        />
        <div className="md:grid md:grid-cols-2 gap-x-2 md:p-2 ">
          <CardOne
            color="black"
            message="Pro Beyond"
            title="iPhone 12 Pro"
            image="./assets/images/banner/iphone_tradein_promo__d5au3rkw5kuq_large.jpg"
          />
          <CardTwo
            color="white"
            message="Pro Beyond"
            title="iPhone 12 Pro"
            image="./assets/images/banner/promo_wwdc23__b68ptht3mro2_large.jpg"
          />
          <CardOne
            color="black"
            message="Pro Beyond"
            title="iPhone 12 Pro"
            image="./assets/images/banner/promo_ipad__fioegapg12qi_large.jpg"
          />
          <CardOne
            color="white"
            message="Pro Beyond"
            title="iPhone 12 Pro"
            image="./assets/images/banner/promo_mbp__ek7p477bkp6q_large.jpg"
          />
          <CardOne
            color="white"
            message="Pro Beyond"
            title="iPhone 12 Pro"
            image="./assets/images/banner/promo_homepod__f7jnolq94m2y_large.jpg"
          />
          <CardOne
            color="black"
            message="Pro Beyond"
            title="iPhone 12 Pro"
            image="./assets/images/banner/tile__cauwwcyyn9hy_large.jpg"
          />
        </div>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
