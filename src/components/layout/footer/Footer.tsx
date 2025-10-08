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
    <footer className="px-20 py-9 md:px-12 md:pt-5 md:pb-4 lg:px-11 lg:pt-7 lg:pb-6 flex flex-col md:flex-row justify-between items-center border-black30">
      <Logo className="mb-6 md:mb-0" />
      <div className="flex flex-col md:flex-row justify-center gap-5">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <Text className="text-center md:text-xs md:text-end lg:text-sm text-black30">
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
