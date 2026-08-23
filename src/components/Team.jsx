import Heading from "./Heading";
import PersonCard from "./PersonCard";
import person1 from "../assets/person/Picture.png";
import person2 from "../assets/person/Picture (1).png";
import person3 from "../assets/person/Picture (2).png";
import Button from "./Button";

const teamMembers = [
  {
    name: "John Smith",
    jobTitle: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: person1,
  },
  {
    name: "Jane Doe",
    jobTitle: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: person2,
  },
  {
    name: "Michael Brown",
    jobTitle: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: person3,
  },
  {
    name: "Emily Johnson",
    jobTitle: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: person2,
  },
  {
    name: "Brian Williams",
    jobTitle: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    image: person3,
  },
  {
    name: "Sarah Kim",
    jobTitle: "Content Creator",
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    image: person1,
  },
];

const Team = () => {
  return (
    <section id="team" className="relative mb-10 pt-17.5 md:mb-30">
      <div className="mb-15 flex flex-col items-center gap-5 text-center md:gap-10 md:text-start lg:flex-row">
        <Heading
          variant="tertiary"
          text1="Team"
          className="text-h2-mob lg:text-h2"
        />
        <span className="text-p-mob lg:text-p">
          Meet the skilled and experienced team behind our
          <br className="hidden md:block" /> successful digital marketing
          strategies include:
        </span>
      </div>
      <div className="mt-10 flex w-full flex-wrap justify-center gap-10 lg:mt-0">
        {teamMembers.map((person, index) => (
          <PersonCard
            key={index}
            name={person.name}
            jobTitle={person.jobTitle}
            description={person.description}
            image={person.image}
          />
        ))}
      </div>
      <Button className="absolute right-0 -bottom-30 w-full md:flex lg:w-67">
        See all team
      </Button>
    </section>
  );
};

export default Team;
