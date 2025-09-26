import { Button } from "../../ui/Button";
import { Image } from "../../ui/Image";
import { Text } from "../../ui/Text";
import { aboutData } from "./about.data";

export const About = () => {
  return (
    <section className="rounded-3xl lg:px-[40px] lg:py-[50px] flex gap-5">
      <div className="flex-1">
        <Text tag="h1" textStyle="5xl" className="font-bold leading-[114.99%] mb-4 w-3/4">{aboutData.title}</Text>
        <Text tag="h2" textStyle="lg" className="mb-10 font-normal leading-6 tracking-normal w-3/4">
          {aboutData.description}
        </Text>
        <div className="flex gap-3">
          <Button size="lg">Sign In</Button>
          <Button variant="secondary" size="lg">Register</Button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1">
        <Image src={aboutData.banner.img} alt={aboutData.banner.alt} className="rounded-3xl"/>
      </div>
    </section>
  );
};
