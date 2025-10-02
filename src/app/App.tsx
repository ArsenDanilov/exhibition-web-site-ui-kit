import { Join } from "@/components/layout/join/Join";
import { About } from "@/components/layout/about/About";
import { Footer } from "@/components/layout/footer/Footer";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { LatestNews } from "@/components/cards/latestNews/LatestNews";
import { Sessions } from "@/components/cards/sessions/Sessions";
import { Content } from "@/components/cards/content/Content";
import { Product } from "@/components/cards/product/Product";
import { Members } from "@/components/cards/members/Members";
import { Companies } from "@/components/cards/companies/Companies";
import { PaidBanner } from "@/components/cards/paidBanner/PaidBanner";
import { MainSection } from "@/components/layout/mainSection/MainSection";

function App() {
  return (
    <>
      <div>
        {/* <Navbar />
        <About />
        <Join />
        <Footer /> */}
        {/* <LatestNews /> */}
          <Navbar {...Navbar.schema.getDefaultProps()}/>
          <Sessions />
        {/* <Content  /> */}
        {/* <Product /> */}
        {/* <Members /> */}
        {/* <Companies /> */}
        {/* <PaidBanner /> */}
        <MainSection />
      </div>
    </>
  );
}

export default App;
