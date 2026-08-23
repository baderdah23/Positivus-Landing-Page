import { cva } from "class-variance-authority";

const heading = cva(" w-fit rounded-[7px] px-2", {
  variants: {
    variant: {
      primary: "bg-primary text-light-gray ",
      secondary: "bg-white",
      tertiary: "bg-tertiary ",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Heading = ({ text1, text2, text3, variant, className }) => {
  return (
    <div className="flex flex-col">
      <span className={heading({ variant, className })}>{text1}</span>
      <span className={heading({ variant, className })}>{text2}</span>
      <span className={heading({ variant, className })}>{text3}</span>
    </div>
  );
};

export default Heading;
