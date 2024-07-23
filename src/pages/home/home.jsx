import ImgSlider from "./imgSlider";
import HomeDiscount from "./discount/discountScroller";
import Category from "./category";
import SectionWraper from "../../components/hoc";

const HomePage = () => {
  return (
    <SectionWraper>
      <div className="flex flex-col items-center justify-center w-full md:gap-4 gap-2">
        <ImgSlider />
        <HomeDiscount />
        <Category />
      </div>
    </SectionWraper>
  );
};

export default HomePage;
