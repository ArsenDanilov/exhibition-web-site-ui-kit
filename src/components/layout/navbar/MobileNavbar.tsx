import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetOverlay,
} from "@/components/ui/base/sheet";
import { MobileMenuButton } from "./MobileMenuButton";
import { Button } from "@/components/ui/Button";
import navbarMenuArrow from "@/assets/navbarMenuArrow.svg";
import { Link } from "@/components/ui/Link";
import type { NavbarLink } from "./Navbar";
import { Image } from "@/components/ui/Image";
import { IconButton } from "@/components/ui/IconButton";

export const MobileNavbar = ({ links }: { links: NavbarLink[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden bg-white rounded-b-3xl">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="z-10 relative flex items-center justify-between px-7 py-5 rounded-b-3xl mb-9">
          <Logo />
          <SheetTrigger>
            <MobileMenuButton isOpen={isOpen} />
          </SheetTrigger>
        </div>
        <SheetOverlay className="bg-red-500" asChild/>
        <SheetContent
          side="top"
          className="rounded-xl p-3 mx-auto mx-4"
        >
          <div className="mb-5 bg-background rounded-2xl border border-black12">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                variant="default"
                size="sm"
                className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  {link.icon && <IconButton variant="muted"><Image src={link.icon} alt="link icon" /></IconButton>}
                  {link.text}
                </div>
                <img src={navbarMenuArrow} alt="navbar menu arrow" />
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Button
              variant="default"
              fullWidth
              size="lg"
            >
              Sign In
            </Button>
            <Button
              variant="secondary"
              fullWidth
              size="lg"
            >
              Register
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
