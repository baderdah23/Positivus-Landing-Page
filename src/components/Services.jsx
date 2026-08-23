import Card from "./Card";
import Heading from "./Heading";
import servicesImg1 from "../assets/image/services1.webp";
import servicesImg2 from "../assets/image/services2.webp";
import servicesImg3 from "../assets/image/services3.webp";
import servicesImg4 from "../assets/image/services4.webp";
import servicesImg5 from "../assets/image/services5.webp";
import servicesImg6 from "../assets/image/services6.webp";

const servicesList = [
  {
    img: servicesImg1,
    bg: "bg-light-gray",
    heading: {
      text1: "Search engine",
      text2: "optimization",
      variant: "tertiary",
    },
    link: {
      text: "Learn more",
      variant: "black2",
    },
  },
  {
    img: servicesImg2,
    bg: "bg-tertiary",
    heading: {
      text1: "Pay-per-click",
      text2: "advertising",
      variant: "secondary",
    },
    link: {
      text: "Learn more",
      variant: "black2",
    },
  },
  {
    img: servicesImg3,
    bg: "bg-primary",
    heading: {
      text1: "Social Media",
      text2: "Marketing",
      variant: "secondary",
    },
    link: {
      text: "Learn more",
      variant: "white",
    },
  },
  {
    img: servicesImg4,
    bg: "bg-light-gray",
    heading: {
      text1: "Email",
      text2: "Marketing",
      variant: "tertiary",
    },
    link: {
      text: "Learn more",
      variant: "black2",
    },
  },
  {
    img: servicesImg5,
    bg: "bg-tertiary",
    heading: {
      text1: "Content",
      text2: "Creation",
      variant: "secondary",
    },
    link: {
      text: "Learn more",
      variant: "black2",
    },
  },
  {
    img: servicesImg6,
    bg: "bg-primary",
    heading: {
      text1: "Analytics and",
      text2: "Tracking",
      variant: "tertiary",
    },
    link: {
      text: "Learn more",
      variant: "white",
    },
  },
];

const Services = () => {
  return (
    <section id="services" className="flex w-full flex-col gap-17.5 pt-17.5">
      <div className="flex flex-col items-center gap-5 text-center md:flex-row md:gap-10 md:text-start">
        <Heading
          variant="tertiary"
          text1="Services"
          className="text-h2-mob lg:text-h2"
        />
        <span className="text-p-mob lg:text-p">
          At our digital marketing agency, we offer a range of services to{" "}
          <br className="hidden md:block" /> help businesses grow and succeed
          online. These services include:
        </span>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-10 md:mt-0">
        {servicesList.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
