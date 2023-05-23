import Banner from "../components/cards/support/banner/banner";
import Navbar from "../components/navbar/navbar";
import AppleSupport from "../components/support/appleSupport";
import Privacy from "../components/support/privacy/privacy";
import Search from "../components/support/search/search";
import SupportCard from "../components/support/supportCard/supportCard";
import LatestUpdate from "../components/support/update/latestUpdate";
function Support() {
  return (
    <div>
      <Navbar theme="light" />
      <Banner />
      <AppleSupport />
      <Search />
      <LatestUpdate />
      <Privacy />
      <SupportCard />
    </div>
  );
}

export default Support;
