import { Link } from "@/components//ui/Link"
import { Logo } from "@/components//ui/Logo"
import { Text } from "@/components//ui/Text"
import { footerData } from "./footer.data"

export const Footer = () => {
    return (
        <footer className="px-11 pt-7 pb-6 flex justify-between items-center border-black30">
            <Logo />
            <div className="flex justify-center gap-5">
                {footerData.map((item) => (
                    <Link href={item.href} key={item.href}>
                        <Text textStyle="sm" className="text-black30">{item.title}</Text>
                    </Link>
                ))}
            </div>
        </footer>
    )
}