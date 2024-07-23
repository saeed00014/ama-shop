const DiscountBar = () => {
  return (
    <div className="flex justify-between items-center lg:px-12 md:px-8 px-4 w-full md:h-16 h-12 bg-yellow-500">
      <span className="md:text-3xl text-2xl font-[500] text-white">%</span>
      <h2 className="md:text-2xl font-[500] pb-1 text-white">تخفیف های ویژه</h2>
      <span className="md:text-3xl text-2xl font-[500] text-white">%</span>
    </div>
  );
};

export default DiscountBar;
