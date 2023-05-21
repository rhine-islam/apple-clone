import Ad from "./components/ads/ad";
import MainBanner from "./components/cards/banner/mainBanner";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Ad />
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
    </div>
  );
}

export default App;
