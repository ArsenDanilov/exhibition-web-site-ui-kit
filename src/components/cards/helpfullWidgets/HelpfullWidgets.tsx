import { Text } from "@/components/ui/Text";
import { PaidBanner } from "../paidBanner/PaidBanner";
import { Sessions } from "../sessions/Sessions";
import { Content } from "../content/Content";
import { Members } from "../members/Members";
import { Product } from "../product/Product";
import { Companies } from "../companies/Companies";

export const HelpfullWidgets = () => {
    return (
        <aside className="flex flex-col gap-5 w-[40%]">
            <Text tag="h3" textStyle="3xl" className="text-3xl mb-5 font-semibold">Helpfull Widgets</Text>
            <PaidBanner />
            <Sessions />
            <Content />
            <Members />
            <Product />
            <Companies />
        </aside>
    )
}