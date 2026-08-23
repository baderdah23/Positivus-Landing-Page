import LogoLoop from "./LogoLoop";

import heroImage from "../assets/image/hero.png";
import company1 from "../assets/logo/Company logo.png";
import company2 from "../assets/logo/Company1 logo .png";
import company3 from "../assets/logo/Company2 logo .png";
import company4 from "../assets/logo/Company3 logo .png";
import company5 from "../assets/logo/Company4 logo .png";
import company6 from "../assets/logo/Company6 logo .png";
import Button from "./Button";
import Header from "./Header";

const techLogos = [
  {
    node: <img src={company1} alt="logo Company 1" />,
    title: "logo1",
  },
  {
    node: <img src={company2} alt="logo Company 2" />,
    title: "logo2",
  },
  {
    node: <img src={company3} alt="logo Company 3" />,
    title: "logo3",
  },
  {
    node: <img src={company4} alt="logo Company 4" />,
    title: "logo4",
  },
  {
    node: <img src={company5} alt="logo Company 5" />,
    title: "logo5",
  },
  {
    node: <img src={company6} alt="logo Company 6" />,
    title: "logo6",
  },
];
const techLogosMob1 = [
  {
    node: <img src={company1} alt="logo Company 1" />,
    title: "logo1",
  },
  {
    node: <img src={company2} alt="logo Company 2" />,
    title: "logo2",
  },
  {
    node: <img src={company3} alt="logo Company 3" />,
    title: "logo3",
  },
];
const techLogosMob2 = [
  {
    node: <img src={company4} alt="logo Company 4" />,
    title: "logo4",
  },
  {
    node: <img src={company5} alt="logo Company 5" />,
    title: "logo5",
  },
  {
    node: <img src={company6} alt="logo Company 6" />,
    title: "logo6",
  },
];

const Hero = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between pb-10">
      <Header />

      <section
        id="hero"
        className="mt-10 mb-20 flex w-full flex-col gap-10 md:mt-17.5 md:mb-35 md:gap-17.5"
      >
        <div className="mb-5 flex flex-col items-center gap-10 md:flex-row md:gap-20">
          <div className="flex flex-1 flex-col items-center gap-6 md:items-start md:gap-9 md:text-left">
            <h1 className="text-h1-mob lg:text-h1 leading-tight font-bold">
              Navigating the digital landscape for success
            </h1>
            <p className="text-gray-700">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Button className="w-fit">Book a consultation</Button>
          </div>
          <div className="-order-1 w-full max-w-[400px] flex-1 md:order-2 md:max-w-none">
            <img
              src={heroImage}
              alt="hero image"
              fetchPriority="high"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="relative mt-6 hidden h-12 overflow-hidden md:block">
          <LogoLoop
            logos={techLogos}
            speed={65}
            direction="left"
            logoHeight={50}
            gap={80}
            hoverSpeed={0}
            scaleOnHover={false}
            fadeOut
            fadeOutColor="#0000000"
            ariaLabel="Technology partners"
          />
        </div>
        <div className="relative mt-6 block h-12 overflow-hidden md:hidden">
          <LogoLoop
            logos={techLogosMob1}
            speed={65}
            direction="right"
            logoHeight={50}
            gap={80}
            hoverSpeed={0}
            scaleOnHover={false}
            fadeOut
            fadeOutColor="#0000000"
            ariaLabel="Technology partners"
          />
        </div>
        <div className="relative mt-6 block h-12 overflow-hidden md:hidden">
          <LogoLoop
            logos={techLogosMob2}
            speed={65}
            direction="left"
            logoHeight={50}
            gap={80}
            hoverSpeed={0}
            scaleOnHover={false}
            fadeOut
            fadeOutColor="#0000000"
            ariaLabel="Technology partners"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
