import { About } from "@/components/layout/about/About";
import { MainSection } from "@/components/layout/mainSection/MainSection";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Join } from "../components/layout/join/Join";

function App() {
  return (
    <>
      <div>
        <Navbar {...Navbar.schema.getDefaultProps()} />
        <About {...About.schema.getDefaultProps()} />
        <MainSection />
        <Join {...Join.schema.getDefaultProps()} />
      </div>
    </>
  );
}

export default App;
