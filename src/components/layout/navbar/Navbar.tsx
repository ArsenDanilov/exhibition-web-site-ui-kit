import { MobileNavbar } from './MobileNavbar';
import { DesktopNavbar } from './DesktopNavbar';
import type {EditableComponent} from "../../../types";
import bag from "@/assets/bag.svg";
import chat from "@/assets/chat.svg";
import document from "@/assets/document.svg";
import megaphone from "@/assets/megaphone.svg";


export interface NavbarLink  {
    text: string,
    href: string,
    icon?: string,
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
            { text: "Connect", href: "/connect", icon: bag },
            { text: "News", href: "/news", icon: chat },
            { text: "Sessions", href: "/sessions", icon: document },
            { text: "Members", href: "/members", icon: megaphone },
            { text: "Products", href: "/products", icon: bag },
            { text: "Companies", href: "/companies", icon: chat },
        ]
    })
}