import { Button } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image";
import { Text } from "@/components/ui/Text";
import { type EditableComponent } from "../../../types";
import aboutBanner from "../../../assets/aboutBanner.jpg"

interface IAboutProps {
  aboutTitle: string;
  aboutDescription: string;
  aboutBanner: {
    img: string;
    alt: string;
  };
}

export const About: EditableComponent<IAboutProps> = ({ aboutTitle, aboutDescription, aboutBanner }) => {
  return (
    <section className="rounded-3xl lg:px-[40px] lg:py-[50px] flex gap-5">
      <div className="flex-1">
        <Text
          tag="h1"
          textStyle="2xl"
          className="font-bold leading-[114.99%] mb-4 w-3/4"
        >
          {aboutTitle}
        </Text>
        <Text
          tag="h2"
          textStyle="lg"
          className="mb-10 font-normal leading-6 tracking-normal w-3/4"
        >
          {aboutDescription}
        </Text>
        <div className="flex gap-3">
          <Button size="lg">Sign In</Button>
          <Button variant="secondary" size="lg">
            Register
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1">
        <Image
          src={aboutBanner.img}
          alt={aboutBanner.alt}
          className="rounded-3xl"
        />
      </div>
    </section>
  );
};

About.schema = {
  label: "About",
  type: "About",
  getDefaultProps: () => ({
    aboutTitle: "Take a glance at ITE Connect business community",
    aboutDescription: "Evaluate the capabilities of the platform without even registering on it. Latest business news, sessions with successful entrepreneurs, meetings with partners - all this already awaits you!",
    aboutBanner: {
        img: aboutBanner,
        alt: "WorldFood Summit & Нильсен Академия"
    },
  }),
};
