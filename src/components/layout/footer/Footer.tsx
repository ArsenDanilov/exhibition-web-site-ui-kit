import { Link } from "@/components/ui/Link";
import { Logo } from "@/components/ui/Logo";
import { Text } from "@/components/ui/Text";
import { type EditableComponent } from "../../../types";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterProps {
  links: FooterLink[];
}

export const Footer: EditableComponent<FooterProps> = ({ links }) => {
  return (
    <footer className="px-11 pt-7 pb-6 flex justify-between items-center border-black30">
      <Logo />
      <div className="flex justify-center gap-5">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <Text textStyle="sm" className="text-black30">
              {link.title}
            </Text>
          </Link>
        ))}
      </div>
    </footer>
  );
};

Footer.schema = {
  label: "Footer",
  type: "Footer",
  getDefaultProps: () => ({
    links: [
      { title: "Правила пользования платформой", href: "/rules" },
      { title: "Политика использования данных", href: "/politics" },
    ],
  }),
};
