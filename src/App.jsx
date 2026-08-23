import { lazy } from "react";
import Hero from "./components/Hero";
const Services = lazy(() => import("./components/Services"));
const img = lazy(() => import("./assets/image/Frame 19.webp"));
const Button = lazy(() => import("./components/Button"));
const Heading = lazy(() => import("./components/Heading"));
const Link = lazy(() => import("./components/Link"));
const Process = lazy(() => import("./components/Process"));
const Team = lazy(() => import("./components/Team"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Footer = lazy(() => import("./components/Footer"));
const Testimonials = lazy(() => import("./components/Testimonials"));

function App() {
  return (
    <>
      <Hero />
      <Services />
      <div className="my-25 flex items-center md:h-99">
        <div className="bg-light-gray flex h-[347px] w-full items-center justify-between rounded-[45px]">
          <div className="flex w-125 flex-col justify-center gap-6.5 pl-5 md:items-center lg:items-start lg:pl-15">
            <h3 className="text-h3-mob lg:text-h3">Let’s make things happen</h3>
            <p className="text-p-mob lg:text-p md:text-center lg:text-start">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button className="w-83 lg:w-fit">Get your free proposal</Button>
          </div>
          <img
            className="hidden lg:inline"
            src={img}
            alt="image"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex max-h-12 flex-col items-center gap-10 md:flex-row md:items-start lg:mb-25">
        <Heading
          variant="tertiary"
          text1="Case Studies"
          className="text-h2-mob lg:text-h2"
        />
        <span className="text-p-mob lg:text-p text-center md:text-start">
          Explore Real-Life Examples of Our Proven Digital Marketing <br />
          Success through Our Case Studies
        </span>
      </div>
      {/*descktop*/}
      <div className="bg-primary mt-35 mb-30 hidden gap-16 rounded-[45px] px-15 py-17.5 text-white lg:mt-0 lg:flex">
        <div className="flex flex-col gap-5">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <Link text="Learn more" variant="simpleGreen" />
        </div>
        <span className="h-46.5 w-1 bg-white"></span>

        <div className="flex flex-col gap-5">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <Link text="Learn more" variant="simpleGreen" />
        </div>
        <span className="h-46.5 w-1 bg-white"></span>

        <div className="flex flex-col gap-5">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <Link text="Learn more" variant="simpleGreen" />
        </div>
      </div>
      {/*mobile*/}
      <div className="mt-35 mb-10 flex gap-3 overflow-x-scroll px-2.5 py-10 text-white lg:mt-0 lg:mb-30 lg:hidden">
        <div className="bg-primary flex h-90 w-90 shrink-0 flex-col items-center justify-between rounded-[45px] px-5 py-10">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <Link text="Learn more" variant="simpleGreen" />
        </div>
        <span className="h-46.5 w-1 bg-white"></span>

        <div className="bg-primary flex h-90 w-90 shrink-0 flex-col items-center justify-between rounded-[45px] px-5 py-10">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <Link text="Learn more" variant="simpleGreen" />
        </div>
        <span className="h-46.5 w-1 bg-white"></span>

        <div className="bg-primary flex h-90 w-90 shrink-0 flex-col items-center justify-between rounded-[45px] px-5 py-10">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <Link text="Learn more" variant="simpleGreen" />
        </div>
      </div>

      <Process />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
