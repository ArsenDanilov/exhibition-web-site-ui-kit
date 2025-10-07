import { About } from "@/components/layout/about/About";
import { MainSection } from "@/components/layout/mainSection/MainSection";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Join } from "@/components/layout/join/Join";
import { Footer } from "@/components/layout/footer/Footer";
import { LatestNews } from "../components/cards/latestNews/LatestNews";
import { Sessions } from "../components/cards/sessions/Sessions";
import { Content } from "../components/cards/content/Content";

function App() {
  return (
    <>
      <div>
        {/* <Navbar {...Navbar.schema.getDefaultProps()} /> */}
        {/* <About {...About.schema.getDefaultProps()} /> */}
        {/* <MainSection />
        <Join {...Join.schema.getDefaultProps()} />
        <Footer {...Footer.schema.getDefaultProps()} /> */}
        {/* <LatestNews {...LatestNews.schema.getDefaultProps()} /> */}
        {/* <Sessions {...Sessions.schema.getDefaultProps()}/> */}
        <Content {...Content.schema.getDefaultProps()} />
      </div>
    </>
  );
}

export default App;
