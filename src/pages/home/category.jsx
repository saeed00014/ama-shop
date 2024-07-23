import CategoryCard from "./categoryCard";

import { categoryCard } from "../../data/data";

const Category = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-[500]">دسته‌بندی های آماشاپ</h2>
      </div>
      <div className="grid xl:grid-cols-4 grid-cols-3 items-center justify-center w-full max-w-[1450px] pt-4 lg:gap-4 md:gap-3 gap-2">
        {categoryCard.map((category) => {
          return (
            <div key={category.title}>
              <CategoryCard category={category} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
