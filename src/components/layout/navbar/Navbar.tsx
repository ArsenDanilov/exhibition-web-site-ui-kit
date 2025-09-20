import { useMediaQuery } from 'usehooks-ts';
import { MobileNavbar } from './MobileNavbar';
import { DesktopNavbar } from './DesktopNavbar';
import { navbarData } from './navbar.data';

export const Navbar = () => {
    const isDesktop = useMediaQuery('(min-width: 880px)');

    return (
        <div>
            {isDesktop ? <DesktopNavbar data={navbarData}/> : <MobileNavbar data={navbarData}/>}
        </div>
    )
}