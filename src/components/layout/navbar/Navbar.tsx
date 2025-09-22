import { MobileNavbar } from './MobileNavbar';
import { DesktopNavbar } from './DesktopNavbar';
import { navbarData } from './navbar.data';

export const Navbar = () => {

    return (
        <div>
            <DesktopNavbar data={navbarData}/>
            <MobileNavbar data={navbarData}/>
        </div>
    )
}