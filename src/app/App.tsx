import { About } from "@/components/layout/about/About";
import { MainSection } from "@/components/layout/mainSection/MainSection";
import { Navbar } from "@/components/layout/navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar {...Navbar.schema.getDefaultProps()} />
        <About {...About.schema.getDefaultProps()} />
        <MainSection />
      </div>
    </>
  );
}

export default App;
