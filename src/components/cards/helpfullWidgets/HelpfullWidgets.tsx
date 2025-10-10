import { Text } from "@/components/ui/Text";
import { PaidBanner } from "../paidBanner/PaidBanner";
import { Sessions } from "../sessions/Sessions";
import { Content } from "../content/Content";
import { Members } from "../members/Members";
import { Product } from "../product/Product";
import { Companies } from "../companies/Companies";

export const HelpfullWidgets = () => {
  return (
    // <aside className="!bg-white rounded-3xl py-9 sm:py-0 sm:!bg-transparent sm:rounded-none flex flex-col gap-5 sm:w-[45%] sm:gap-3 lg:gap-5">
    //     <Text as="h2" size="xl" weight="semibold" className="text-center md:text-start">Helpfull Widgets</Text>
    //     <PaidBanner {...PaidBanner.schema.getDefaultProps()} />
    //     <Sessions {...Sessions.schema.getDefaultProps()} />
    //     <Content {...Content.schema.getDefaultProps()} />
    //     <Members {...Members.schema.getDefaultProps()} />
    //     <Product {...Product.schema.getDefaultProps()} />
    //     <Companies {...Companies.schema.getDefaultProps()} />
    // </aside>

    <aside className="!bg-white rounded-3xl py-9 sm:py-0 sm:!bg-transparent sm:rounded-none sm:w-[45%]">
        <Text
        as="h2"
        size="xl"
        weight="semibold"
        className="text-center md:text-start mb-5"
      >
        Helpfull Widgets
      </Text>
      <div className="flex flex-col gap-5 sm:gap-5">
        <PaidBanner {...PaidBanner.schema.getDefaultProps()} />
        <Sessions {...Sessions.schema.getDefaultProps()} />
        <Content {...Content.schema.getDefaultProps()} />
        <Members {...Members.schema.getDefaultProps()} />
        <Product {...Product.schema.getDefaultProps()} />
        <Companies {...Companies.schema.getDefaultProps()} />
      </div>
    </aside>
  );
};
