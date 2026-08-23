import { useState } from "react";
import Heading from "./Heading";
import ProcessCard from "./ProcessCard";

const processData = [
  {
    text: "Consultation",
    number: "01",
    pText:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    text: "Research and Strategy Development",
    number: "02",
    pText:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    text: "Implementation",
    number: "03",
    pText:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    text: "Monitoring and Optimization",
    number: "04",
    pText:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    text: "Reporting and Communication",
    number: "05",
    pText:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    text: "Continual Improvement",
    number: "06",
    pText:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

const Process = () => {
  const [isActive, setIsActive] = useState("01");
  return (
    <section
      id="process"
      className="mb-10 flex w-full flex-col gap-10 pt-17.5 md:mb-30 md:gap-17.5"
    >
      <div className="mb-5 flex flex-col items-center gap-5 text-center md:flex-row md:gap-10 md:text-start">
        <Heading
          variant="tertiary"
          text1="Our Working Process "
          className="text-h2-mob lg:text-h2"
        />
        <span className="text-p-mob lg:text-p">
          Step-by-Step Guide to Achieving <br className="hidden md:block" />{" "}
          Your Business Goals
        </span>
      </div>
      <div className="flex flex-col gap-7.5">
        {processData.map((process) => (
          <ProcessCard
            key={process.number}
            text={process.text}
            number={process.number}
            pText={process.pText}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        ))}
      </div>
    </section>
  );
};

export default Process;
