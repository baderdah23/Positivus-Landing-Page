import { useState, useEffect } from "react";
import Heading from "./Heading";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const CARD_WIDTH = isMobile ? 430 : 655;
  const CENTER_CARD = 3;
  const CARD_NUMBER = 5;

  const [currentCard, setCurrentCard] = useState(1);
  const handlePreviousClick = () => {
    setCurrentCard((prev) => Math.max(prev - 1, 1));
  };
  const handleNextClick = () => {
    setCurrentCard((prev) => Math.min(prev + 1, CARD_NUMBER));
  };

  const translateX = (CENTER_CARD - currentCard) * CARD_WIDTH;

  return (
    <section id="testimonials" className="pt-35 md:pt-20">
      <div className="flex max-h-none flex-col items-center gap-5 text-center md:max-h-12 md:flex-row md:items-center md:gap-10 md:text-left">
        <Heading
          variant="tertiary"
          text1="Testimonials"
          className="text-h2-mob lg:text-h2"
        />
        <span className="text-p-mob lg:text-p">
          Hear from Our Satisfied Clients: Read Our Testimonials{" "}
          <br className="hidden md:block" /> to Learn More about Our Digital
          Marketing Services
        </span>
      </div>
      <div className="bg-primary mt-20 flex h-[480px] w-full flex-col items-center justify-center gap-10 overflow-hidden rounded-[30px] p-6 md:h-156.25 md:gap-31 md:rounded-[45px] md:p-0">
        <div
          className="flex items-center justify-between gap-12.5 transition-transform duration-300"
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          <TestimonialsCard id={1} />
          <TestimonialsCard id={2} />
          <TestimonialsCard id={3} />
          <TestimonialsCard id={4} />
          <TestimonialsCard id={5} />
        </div>
        <div className="flex w-full max-w-[280px] items-center justify-between transition-all duration-300 md:w-142.5">
          <button onClick={handlePreviousClick} className="cursor-pointer p-2">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-all duration-300"
                d="M21.5 12.5459C22.3284 12.5459 23 11.8743 23 11.0459C23 10.2175 22.3284 9.5459 21.5 9.5459L21.5 12.5459ZM0.439341 9.98524C-0.146446 10.571 -0.146446 11.5208 0.43934 12.1066L9.98528 21.6525C10.5711 22.2383 11.5208 22.2383 12.1066 21.6525C12.6924 21.0667 12.6924 20.117 12.1066 19.5312L3.62132 11.0459L12.1066 2.56062C12.6924 1.97483 12.6924 1.02508 12.1066 0.439296C11.5208 -0.146491 10.5711 -0.146491 9.98528 0.439296L0.439341 9.98524ZM21.5 9.5459L1.5 9.5459L1.5 12.5459L21.5 12.5459L21.5 9.5459Z"
                fill={currentCard === 1 ? "gray" : "white"}
              />
            </svg>
          </button>
          <div className="flex gap-3 md:gap-5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-all duration-300"
                d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                fill={currentCard === 1 ? "#B9FF66" : "#fff"}
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-all duration-300"
                d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                fill={currentCard === 2 ? "#B9FF66" : "#fff"}
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-all duration-300"
                d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                fill={currentCard === 3 ? "#B9FF66" : "#fff"}
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-all duration-300"
                d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                fill={currentCard === 4 ? "#B9FF66" : "#fff"}
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-all duration-300"
                d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                fill={currentCard === 5 ? "#B9FF66" : "#fff"}
              />
            </svg>
          </div>
          <button onClick={handleNextClick} className="cursor-pointer p-2">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-all duration-300"
                d="M1.5 9.5459C0.671573 9.5459 1.44847e-07 10.2175 0 11.0459C-1.44847e-07 11.8743 0.671573 12.5459 1.5 12.5459L1.5 11.0459L1.5 9.5459ZM22.5607 12.1066C23.1464 11.5208 23.1464 10.571 22.5607 9.98524L13.0147 0.439299C12.4289 -0.146488 11.4792 -0.146488 10.8934 0.439298C10.3076 1.02509 10.3076 1.97483 10.8934 2.56062L19.3787 11.0459L10.8934 19.5312C10.3076 20.117 10.3076 21.0667 10.8934 21.6525C11.4792 22.2383 12.4289 22.2383 13.0147 21.6525L22.5607 12.1066ZM1.5 11.0459L1.5 12.5459L21.5 12.5459L21.5 11.0459L21.5 9.5459L1.5 9.5459L1.5 11.0459Z"
                fill={currentCard === 5 ? "gray" : "white"}
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
