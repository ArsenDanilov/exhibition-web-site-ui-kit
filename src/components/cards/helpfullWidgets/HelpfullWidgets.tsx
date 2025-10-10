import { Text } from "@/components/ui/Text";
import { PaidBanner } from "../paidBanner/PaidBanner";
import { Sessions } from "../sessions/Sessions";
import { Content } from "../content/Content";
import { Members } from "../members/Members";
import { Product } from "../product/Product";
import { Companies } from "../companies/Companies";

export const HelpfullWidgets = () => {
    return (
        <aside className="flex flex-col gap-5 sm:gap-3 lg:gap-5 w-[45%]">
            <Text as="h2" size="xl" weight="semibold">Helpfull Widgets</Text>
            <PaidBanner {...PaidBanner.schema.getDefaultProps()} />
            <Sessions {...Sessions.schema.getDefaultProps()} />
            <Content {...Content.schema.getDefaultProps()} />
            <Members {...Members.schema.getDefaultProps()} />
            <Product {...Product.schema.getDefaultProps()} />
            <Companies {...Companies.schema.getDefaultProps()} />
        </aside>
    )
}