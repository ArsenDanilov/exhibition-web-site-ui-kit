import { _Button } from "@/components/ui/_Button";
import { Image } from "@/components/ui/Image";
import { Text } from "@/components/ui/Text";
import connectAppInterface_1 from "@/assets/connectAppInterface_1.png";
import connectAppInterface_2 from "@/assets/connectAppInterface_2.png";
import connectAppInterface_1_tab from "@/assets/connectAppInterface_1_tab.png";
import connectAppInterface_2_tab from "@/assets/connectAppInterface_2_tab.png";
import joinIcons from "@/assets/joinIcons.svg";
import { type EditableComponent } from "../../../types";

interface JoinProps {
  joinTitle: string;
  joinDescription: string;
}

export const Join: EditableComponent<JoinProps> = ({ joinTitle, joinDescription }) => {
  return (
    <section className="bg-black px-6 py-9 md:px-14 md:py-16 lg:px-20 lg:py-[90px] flex gap-5 text-white rounded-3xl relative">
      <div className="md:flex-1">
        <Image
          src={joinIcons}
          alt="social media icons"
          className="hidden md:block md:mb-6 lg:mb-8"
        />
        <Text tag="h1" textStyle="2xl" className="mb-4 font-semibold">
          {joinTitle}
        </Text>
        <Text className="mb-6 md:text-xs md:w-3/4 lg:text-base lg:mb-8">
          {joinDescription}
        </Text>
        <div className="flex gap-3">
          <_Button size="md">
            Join
          </_Button>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center md:flex-1">
        <Image
          src={connectAppInterface_2_tab}
          alt="Interface of the Connect application interface"
          className="md:block lg:hidden absolute top-0"
        />
        <Image
          src={connectAppInterface_1_tab}
          alt="Interface of the Connect application interface"
          className="md:block lg:hidden absolute left-[50%] bottom-0"
        />


        <Image
          src={connectAppInterface_2}
          alt="Interface of the Connect application interface"
          className="hidden lg:block absolute top-0"
        />
        <Image
          src={connectAppInterface_1}
          alt="Interface of the Connect application interface"
          className="hidden lg:block absolute left-[50%] bottom-0"
        />
      </div>
    </section>
  );
};


Join.schema = {
  label: "Join",
  type: "Join",
  getDefaultProps: () => ({
    joinTitle: "Join ITE Connect",
    joinDescription: "The latest business community news, sessions with successful entrepreneurs, meetings with partners - all this is already waiting for you!",
  }),
};
