import { useState } from "react";
import { Logo } from "../../ui/Logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetOverlay,
} from "../../ui/sheet";
import { MobileMenuButton } from "./MobileMenuButton";
import type { INavbarData } from "./navbar.types";
import { Button } from "../../ui/Button";
import navbarMenuArrow from "../../../assets/navbarMenuArrow.svg"
import { Link } from "../../ui/Link";

export const MobileNavbar = ({ data }: { data: INavbarData[] }) => {
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
            {data.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full flex justify-between items-center px-4 py-3 text-black70 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {item.title}
                <img src={navbarMenuArrow} alt="navbar menu arrow" />
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Button
              variant="default"
              className="w-full"
              size="lg"
            >
              Sign In
            </Button>
            <Button
              variant="secondary"
              className="w-full"
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
