import { MobileNavbar } from './MobileNavbar';
import { DesktopNavbar } from './DesktopNavbar';
import type {EditableComponent} from "../../../types";


export interface NavbarLink  {
    text: string,
    href: string,
}

interface NavbarProps {
    links: NavbarLink[];
}

export const Navbar: EditableComponent<NavbarProps> = ({links}) => {
    return (
        <div className='mb-5'>
            <DesktopNavbar links={links}/>
            <MobileNavbar links={links}/>
        </div>
    )
}

Navbar.schema = {
    label: 'Navbar',
    type: 'Navbar',
    getDefaultProps: () => ({
        links: [
            { text: "Connect", href: "/connect" },
            { text: "News", href: "/news" },
            { text: "Sessions", href: "/sessions" },
            { text: "Members", href: "/members" },
            { text: "Products", href: "/products" },
            { text: "Companies", href: "/companies" },
        ]
    })
}