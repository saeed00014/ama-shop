import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cn } from "../../ult/mergeClass";

const CardIcon = ({ classNames }) => {
  const data = useSelector((state) => state.data);

  return (
    <Link
      to="/card"
      className={cn(
        "relative flex justify-center w-16 border-r-[1px] cursor-pointer",
        classNames
      )}
    >
      <RiShoppingCartLine className="lg:text-3xl text-2xl" />
      <span className="absolute right-1 -bottom-3 flex items-center justify-center w-3 h-3 p-[.8rem] rounded-full bg-red-500 text-g_Text_White">
        {data.cards.length}
      </span>
    </Link>
  );
};

export default CardIcon;
