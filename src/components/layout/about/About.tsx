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
    <section className="mb-5 rounded-3xl !bg-white px-[24px] py-[35px] flex flex-col md:flex-row md:p-[30px] lg:px-[40px] lg:py-[50px]  lg:gap-5">
      <div className="flex-1">
        <Text
          as="h1"
          size="2xl"
          weight="bold"
          className="leading-[114.99%] mb-4 w-[100%] md:w-[90%] lg:w-3/4"
        >
          {aboutTitle}
        </Text>
        <Text
          weight="normal"
          className="mb-10 leading-6 tracking-normal w-[100%] md:w-[90%] lg:w-3/4"
        >
          {aboutDescription}
        </Text>
        <div className="md:hidden flex items-center justify-end flex-1 mb-6">
        <Image
          src={aboutBanner.img}
          alt={aboutBanner.alt}
          className="rounded-3xl"
        />
      </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-2">
          <Button size="lg">Sign In</Button>
          <Button variant="secondary" size="lg">
            Register
          </Button>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-end flex-1">
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
