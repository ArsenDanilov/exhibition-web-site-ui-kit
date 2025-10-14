import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import { Logo } from "@/components/ui/Logo";
import type {NavbarLink} from "./Navbar";

export const DesktopNavbar = ({ links }: {links: NavbarLink[]}) => {
  return (
    <nav className="hidden bg-white! items-center justify-between py-[18px] px-[25px] rounded-3xl md:flex md:px-[80px] mdl:px-[108px] lg:px-[24px] ">
      <Logo />
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            variant="default"
            size="sm"
            className="sm:text-xs lg:text-sm"
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex items-center justify-center gap-2">
        <Button>Sign In</Button>
        <Button variant="secondary">Register</Button>
      </div>
    </nav>
  );
};
