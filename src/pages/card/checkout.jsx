import { useSelector } from "react-redux";

const Checkout = () => {
  const data = useSelector((state) => state.data);

  return (
    <div className="flex flex-col items-center justify-center md:w-[250px] h-[125px] p-2 bg-g_Text_White gap-4">
      <div className="flex gap-1">
        <div className="flex flex-row">
          <span>هزینه کل</span>
          &#40;
          {data.totalitems}
          <span>مورد</span>
          &#41;:
          {data.totalprice.toLocaleString("ar-EG")}
          <span className="text-[.6rem]">تومان</span>
        </div>
      </div>
      <button className="w-full pt-1 pb-2 rounded-full bg-red-400 text-g_Text_White font-[500]">
        پرداخت صورت حساب
      </button>
    </div>
  );
};

export default Checkout;
