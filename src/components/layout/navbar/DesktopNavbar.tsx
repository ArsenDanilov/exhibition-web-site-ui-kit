import { Button } from "../../ui/button";
import { Logo } from "../../ui/Logo";
import type { INavbarData } from "./navbar.types";

export const DesktopNavbar = ({ data }: { data: INavbarData[] }) => {
  return (
    <nav className="flex items-center justify-between px-7 py-5 rounded-3xl">
        <Logo />
        <div className="flex items-center gap-6">
          {data.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-blackblur hover:text-black"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button>Sign In</Button>
          <Button variant="secondary">Register</Button>
        </div>
      </nav>
  );
};
