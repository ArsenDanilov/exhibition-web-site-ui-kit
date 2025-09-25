import { Button } from "../../ui/Button";
import { Text } from "../../ui/Text";
import { aboutData } from "./about.data";
import { AboutBanner } from "./AboutBanner";
import { AboutTitle } from "./AboutTitle";

export const About = () => {
  return (
    <section className="rounded-3xl lg:px-[40px] lg:py-[50px] flex gap-5">
      <div className="flex-1">
        <AboutTitle>{aboutData.title}</AboutTitle>
        <Text tag="h1" textStyle="lg" className="mb-10 font-normal leading-6 tracking-normal w-3/4">
          {aboutData.description}
        </Text>
        <div className="flex gap-3">
          <Button size="lg">Sign In</Button>
          <Button variant="secondary" size="lg">Register</Button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1">
        <AboutBanner img={aboutData.banner.img} alt={aboutData.banner.alt}/>
      </div>
    </section>
  );
};
