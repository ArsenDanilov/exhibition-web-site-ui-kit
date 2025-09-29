import { Button } from "../../ui/Button";
import { Image } from "../../ui/Image";
import { Text } from "../../ui/Text";
import { joinData } from "./join.data";
import connectAppInterface_1 from "@/assets/connectAppInterface_1.png"
import connectAppInterface_2 from "@/assets/connectAppInterface_2.png"
import joinIcons from "@/assets/joinIcons.svg"

export const Join = () => {
  return (
    <section className=" bg-black lg:px-[80px] lg:py-[90px] flex gap-5 text-white rounded-3xl relative">
      <div className="flex-1">
        <Image src={joinIcons}  alt="social media icons" className="mb-8 text-5xl"/>
        <Text tag="h1" textStyle="5xl" className="mb-4">{joinData.title}</Text>
        <Text textStyle="lg" className="mb-8 w-3/4">{joinData.description}</Text>
        <div className="flex gap-3">
          <Button size="md" className="text-lg">
            Join
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1">
        <Image src={connectAppInterface_2}  alt="Interface of the Connect application interface" className="absolute top-0"/>
        <Image src={connectAppInterface_1}  alt="Interface of the Connect application interface" className="absolute left-[50%] bottom-0"/>
      </div>
    </section>
  );
};