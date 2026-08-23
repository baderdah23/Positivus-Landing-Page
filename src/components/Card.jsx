import Heading from "./Heading";
import Link from "./Link";

const Card = ({ img, heading, link, bg }) => {
  return (
    <div
      className={`${bg} border-primary flex w-150 flex-col justify-between rounded-[45px] border-1 border-b-6 p-[50px] md:h-77 md:flex-row`}
    >
      <div className="flex flex-col gap-10 md:gap-[93px]">
        <Heading
          text1={heading.text1}
          text2={heading.text2}
          text3={heading.text3}
          variant={heading.variant}
          className="text-h3-mob lg:text-h3"
        />
        <img
          className="w- block h-40 self-center md:hidden"
          src={img}
          alt="services image"
          loading="lazy"
          width={210}
          height={160}
        />
        <Link variant={link.variant} text={link.text} />
      </div>
      <img
        className="hidden self-center md:block"
        src={img}
        alt="services image"
        loading="lazy"
        width={210}
        height={170}
      />
    </div>
  );
};

export default Card;
