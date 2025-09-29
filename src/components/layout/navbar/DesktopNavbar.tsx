import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import { Logo } from "@/components//ui/Logo";
import type { INavbarData } from "./navbar.types";

export const DesktopNavbar = ({ data }: { data: INavbarData[] }) => {
  return (
    <nav className="hidden items-center justify-between py-[18px] px-[25px] rounded-3xl md:flex md:px-[80px] mdl:px-[108px] lg:px-[24px] ">
      <Logo />
      <div className="flex items-center gap-6">
        {data.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-black70 md:hover:text-black"
          >
            {item.title}
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
