import { Link } from "react-router-dom";
import { TbCalendarStats } from "react-icons/tb";

const Calendar = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full min-w-max [&>*]:text-white">
      <div className="absolute bottom-0">
        <Link to="/" className="flex text-[1.2rem] gap-1 cursor-pointer">
          <p className="md:text-[1rem] text-[.9rem]">مشاهده همه</p>
          <span className="md:pt-[2px] -mt-1">&gt;</span>
        </Link>
      </div>

      <div className="flex flex-col md:w-[10rem] w-[7rem] pb-6">
        <h1 className="flex items-start justify-center w-full font-[500] md:text-[1rem] text-[.8rem]">
          تخفیف های امروز
        </h1>
        <span className="relative flex items-start justify-center">
          <TbCalendarStats className="md:text-7xl text-6xl" />
          <span className="absolute bottom-3 md:left-16 font-[500]">24</span>
        </span>
      </div>
    </div>
  );
};

export default Calendar;
