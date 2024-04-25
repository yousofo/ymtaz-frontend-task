import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import WorkItem from "./WorkItem";

const AvailableWorkTimes = () => {
  return (
    <div className="flex items-center w-full">
      <div className="bg-[#DDB762] p-1 text-white rounded cursor-pointer">
        <FaChevronRight />
      </div>
      <ul className="flex flex-1 gap-2">
        <WorkItem title="اليوم" available={false} />
        <WorkItem title="غدا" available={true} />
        <WorkItem title="الاثنين 02/03" available={true} />
      </ul>
      <div className="bg-[#DDB762] p-1 text-white rounded cursor-pointer">
      <FaChevronLeft/>
      </div>
    </div>
  );
};

export default AvailableWorkTimes;
