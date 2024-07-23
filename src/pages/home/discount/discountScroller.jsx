import DiscountBar from "./discountBar";
import Calendar from "./calendar";
import Products from "./products";

const HomeDiscount = () => {
  return (
    <section className="flex items-center justify-center w-[100vw]">
      <div className="flex flex-col items-center justify-center md:gap-4 gap-2 max-w-[1450px]">
        <DiscountBar />
        <div className="flex justify-end items-center w-[100vw] bg-red-400 py-6 pl-2 max-w-[1450px]">
          <Calendar />
          <Products />
        </div>
      </div>
    </section>
  );
};

export default HomeDiscount;
