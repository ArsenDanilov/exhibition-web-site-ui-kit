import { DesktopNavbar } from "./components/layout/navbar/DesktopNavbar"
import { navbarData } from "./components/layout/navbar/navbar.data"
// import { Button } from "./components/ui/button"


function App() {

  return (
    <>
      <div>
        <DesktopNavbar data={navbarData}/>
      </div>
    </>
  )
}

export default App
