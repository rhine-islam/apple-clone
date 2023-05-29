import Banner from "../components/cards/support/banner/banner";
import Directory from "../components/directories/directory";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import AppleSupport from "../components/support/appleSupport";
import Guide from "../components/support/guide/guide";
import MySupport from "../components/support/mySupport/mySupport";
import Privacy from "../components/support/privacy/privacy";
import Search from "../components/support/search/search";
import SupportCard from "../components/support/supportCard/supportCard";
import LatestUpdate from "../components/support/update/latestUpdate";
import images from "../components/utls/images";
function Support() {
  return (
    <div>
      <Navbar theme="white" />
      <Banner desktopImg={images.support1} mobileImg={images.supportMob1} />
      <AppleSupport />
      <Search />
      <LatestUpdate />
      <Privacy />
      <SupportCard />
      <MySupport />
      <Guide />
      <div className="flex flex-col md:items-center">
        <Directory />
        <Footer />
      </div>
    </div>
  );
}

export default Support;
