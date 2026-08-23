import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

const ProcessCard = ({ text, number, pText, isActive, setIsActive }) => {
  const onClickHandler = () => {
    isActive === number ? setIsActive(0) : setIsActive(number);
  };

  console.log(isActive);
  return (
    <div
      className={`border-primary ${isActive === number ? "bg-tertiary " : "bg-light-gray "} flex flex-col justify-center rounded-[45px] border-1 border-b-6 px-5 py-5 transition-all duration-300 md:px-15`}
    >
      <div className="flex items-center justify-between">
        <div className="flex max-w-178 items-center gap-6">
          <span className="text-h3-mob lg:text-h1">{number}</span>
          <span className="text-h4-mob lg:text-h3">{text}</span>
        </div>
        <button
          className={`${isActive === number ? "rotate-180 " : "rotate-0"}`}
          onClick={onClickHandler}
        >
          {isActive === number ? <Icon /> : <Icon type="plus" />}
        </button>
      </div>
      {
        <AnimatePresence>
          {isActive === number && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <span className="border-primary my-7.5 block h-1 w-full border-t-1"></span>
              <p>{pText}</p>
            </motion.div>
          )}
        </AnimatePresence>
      }
    </div>
  );
};

export default ProcessCard;
