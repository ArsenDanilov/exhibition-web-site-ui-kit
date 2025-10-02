import { Join } from "@/components/layout/join/Join"
import { About } from "@/components/layout/about/About"
import { Footer } from "@/components/layout/footer/Footer"
import { Navbar } from "@/components/layout/navbar/Navbar"
import { LatestNews } from "@/components/cards/latestNews/LatestNews"
import { Sessions } from "@/components/cards/sessions/Sessions"
import { Content } from "../components/cards/content/Content"

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
      </div>
    </>
  )
}

export default App
