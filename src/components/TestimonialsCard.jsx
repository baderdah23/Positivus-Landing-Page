const TestimonialsCard = ({ id }) => {
  return (
    <div className="flex w-[380px] shrink-0 flex-col gap-4 md:w-[606px]">
      <div className="border-tertiary relative mb-3 w-[380px] rounded-[30px] border-1 bg-transparent px-6 py-15 text-sm text-white md:w-full md:rounded-[45px] md:px-13 md:py-6 md:py-12 md:text-base">
        <span>
          "We have been working with Positivus for the past year and have seen a
          significant increase in website traffic and leads as a result of their
          efforts. The team is professional, responsive, and truly cares about
          the success of our business. We highly recommend Positivus to any
          company looking to grow their online presence."
        </span>
        <span className="bg-primary border-b-tertiary border-r-tertiary absolute -bottom-[20.5px] left-15 h-10.25 w-10.25 rotate-45 border-1 border-t-transparent border-l-transparent"></span>
      </div>
      <div className="flex w-full flex-col px-4">
        <span className="text-h4-mob text-tertiary lg:text-h4 font-medium">
          John Smith {id}
        </span>
        <span className="text-white">Marketing Director at XYZ Corp</span>
      </div>
    </div>
  );
};

export default TestimonialsCard;
