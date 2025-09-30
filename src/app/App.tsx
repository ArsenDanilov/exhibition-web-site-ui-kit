import { Join } from "@/components/layout/join/Join"
import { About } from "@/components/layout/about/About"
import { Footer } from "@/components/layout/footer/Footer"
import { Navbar } from "@/components/layout/navbar/Navbar"
import { LatestNews } from "../components/cards/LatestNews/LatestNews"

function App() {

  return (
    <>
      <div>
        {/* <Navbar />
        <About />
        <Join />
        <Footer /> */}
        <LatestNews />
      </div>
    </>
  )
}

export default App
