import SectionWraper from "../../components/hoc";
import Checkout from "./checkout";
import Suggestions from "./suggestions";
import DelAll from "./delAll";
import Products from "./products";

const CardPage = () => {
  return (
    <SectionWraper>
      <section className="flex items-center justify-center w-screen">
        <div className="flex md:flex-row flex-col justify-center gap-4 w-full max-w-[1450px]">
          <div className="flex flex-col w-full">
            <h1 className="flex justify-start w-full bg-g_Text_White border-b-[1px] border-g_Border_Shaded_Shop text-2xl p-4">
              سبد خرید
            </h1>
            <Products />
            <DelAll />
          </div>
          <aside className="flex flex-col gap-4">
            <Checkout />
            <Suggestions />
          </aside>
        </div>
      </section>
    </SectionWraper>
  );
};

export default CardPage;
