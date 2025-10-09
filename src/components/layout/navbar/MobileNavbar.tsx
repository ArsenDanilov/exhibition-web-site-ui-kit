import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetOverlay,
} from "@/components/ui/sheet";
import { MobileMenuButton } from "./MobileMenuButton";
import { _Button } from "@/components/ui/_Button";
import navbarMenuArrow from "@/assets/navbarMenuArrow.svg"
import { Link } from "@/components/ui/Link";
import type {NavbarLink} from "./Navbar.tsx";

export const MobileNavbar = ({ links }: {links: NavbarLink[]}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between px-7 py-5 rounded-b-3xl mb-9">
          <Logo />
          <SheetTrigger>
            <MobileMenuButton isOpen={isOpen} />
          </SheetTrigger>
        </div>
        <SheetOverlay className="bg-grey" />
        <SheetContent
          side="top"
          className="rounded-xl py-1 mx-auto w-[calc(100vw-2*3rem)] px-2"
        >
          <div className="mb-5 bg-background rounded-2xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-full flex justify-between items-center px-4 py-3 text-black70 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {link.text}
                <img src={navbarMenuArrow} alt="navbar menu arrow" />
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <_Button
              variant="default"
              className="w-full"
              size="lg"
            >
              Sign In
            </_Button>
            <_Button
              variant="secondary"
              className="w-full"
              size="lg"
            >
              Register
            </_Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
