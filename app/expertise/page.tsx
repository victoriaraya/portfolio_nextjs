import ExpertiseTile from "@/components/ExpertiseTile";
import { expertiseList } from "@/components/Expertise";

const Expertise = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 pt-5 sm:pt-12 px-4 sm:px-14 pb-5 sm:pb-8 sm:gap-x-11 gap-y-5 sm:gap-y-6 text-white text-2xl text-center dark:bg-[#4a3f47] dark:text-gray-100">
      {expertiseList.map((expertise, idx) => (
        <ExpertiseTile expertise={expertise} key={idx} />
      ))}
    </div>
  );
};

export default Expertise;
