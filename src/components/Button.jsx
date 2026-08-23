import { cva } from "class-variance-authority";

const button = cva(
  "text-h4-mob lg:text-h4 flex h-17  min-w-31 items-center justify-center rounded-[14px]  px-5 py-9",
  {
    variants: {
      variant: {
        primary: "bg-primary text-light-gray border-none",
        secondary: "bg-transparent border-1 border-black",
        tertiary: "bg-tertiary ",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

const Button = ({ children, variant, className }) => {
  return <button className={button({ variant, className })}>{children}</button>;
};

export default Button;
