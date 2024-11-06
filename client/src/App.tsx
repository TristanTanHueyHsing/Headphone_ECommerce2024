import "react-multi-carousel/lib/styles.css";
import BannerCategories from "./ui/BannerCategories";
import HomeBanner from "./ui/HomeBanner";
import ProductList from "./ui/ProductList";
import DiscountedBanner from "./ui/DiscountedBanner";
//import Blog from "./ui/Blog";
import SecondBanner from "./ui/SecondBanner";
import ThirdBanner from "./ui/ThirdBanner";
import FourthBanner from "./ui/FourthBanner";
import FifthBanner from "./ui/FifthBanner";

function App() {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <SecondBanner />
      <ThirdBanner />
      <FourthBanner />
      <FifthBanner />
      {/* ProductList */}
      <ProductList />
      {/* DiscountedBanner */}
      <DiscountedBanner />
    </main>
  );
}

export default App;
