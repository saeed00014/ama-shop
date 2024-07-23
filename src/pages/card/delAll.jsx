import { useDispatch, useSelector } from "react-redux";
import { clearall } from "../../store/dataSlice";

const DelAll = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  return (
    <div className="flex w-full justify-start">
      {data.cards.length > 0 && (
        <button
          onClick={() => dispatch(clearall())}
          className="flex items-center justify-center bg-gray-400 text-g_Text_White py-2 px-12 w-fit mt-4 rounded-[2rem]"
        >
          حذف همه
        </button>
      )}
    </div>
  );
};

export default DelAll;
