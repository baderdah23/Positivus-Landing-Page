import Button from "./Button";
import Heading from "./Heading";
import ContactUsImg from "../assets/image/Illustration (4).webp";

const ContactUs = () => {
  return (
    <section id="Contact Us" className="mb-30 pt-17.5">
      <div className="flex flex-col items-center gap-5 text-center md:flex-row md:gap-10 md:text-start">
        <Heading
          variant="tertiary"
          text1="Contact Us"
          className="text-h2-mob lg:text-h2"
        />
        <span className="text-p-mob lg:text-p">
          Connect with Us: Let's Discuss Your <br className="hidden md:block" />{" "}
          Digital Marketing Needs
        </span>
      </div>
      <div className="bg-light-gray relative mt-10 overflow-hidden rounded-[30px] px-6 py-10 md:mt-20 md:rounded-[45px] md:px-25 md:pt-15 md:pb-20 lg:overflow-visible">
        <form className="flex w-full flex-col gap-8 md:w-139 md:gap-10">
          <div className="flex flex-wrap items-center gap-4 md:gap-9">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="say-hi"
                name="contact-goal"
                defaultChecked
                className="outline-primary checked:bg-tertiary border-light-gray checked:border-light-gray h-7 w-7 appearance-none rounded-full border-7 bg-transparent outline-1 transition-all duration-400 ease-in-out"
              />
              <label htmlFor="say-hi" className="cursor-pointer">
                Say Hi
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="get-a-quote"
                name="contact-goal"
                className="outline-primary checked:bg-tertiary border-light-gray checked:border-light-gray h-7 w-7 appearance-none rounded-full border-7 bg-transparent outline-1 transition-all duration-400 ease-in-out"
              />
              <label htmlFor="get-a-quote" className="cursor-pointer">
                Get a Quote
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] md:gap-[25px]">
            <div className="flex w-full flex-col gap-[5px]">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="border-primary w-full rounded-[18px] border-1 bg-white px-5 py-3 outline-none md:px-7.5 md:py-4.5"
              />
            </div>
            <div className="flex w-full flex-col gap-[5px]">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                className="border-primary w-full rounded-[18px] border-1 bg-white px-5 py-3 outline-none md:px-7.5 md:py-4.5"
              />
            </div>

            <div className="flex w-full flex-col gap-[5px]">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                className="border-primary h-36 rounded-[18px] border-1 bg-white px-5 py-3 outline-none md:h-47.5 md:px-7.5 md:py-4.5"
              ></textarea>
            </div>
          </div>
          <Button className="w-full text-center">Send Message</Button>
        </form>
        <img
          src={ContactUsImg}
          alt="contact us image"
          loading="lazy"
          className="absolute top-18.5 hidden max-w-[320px] lg:-right-40 lg:block xl:-right-81 xl:max-w-none"
        />
      </div>
    </section>
  );
};
export default ContactUs;
