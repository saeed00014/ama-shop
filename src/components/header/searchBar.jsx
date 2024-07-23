import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <form className="w-full">
      <div className="relative md:flex hidden items-center justify-start w-full">
        <input
          type="text"
          id="search"
          placeholder="جستجو"
          className="text-start md:w-5/6 w-full max-w-[600px] h-12 bg-g_Background_Shaded_Shop rounded-[10px] pr-12 text-[18px]"
        />
        <label
          htmlFor="search"
          className="absolute right-0 pr-3 cursor-pointer"
        >
          <IoSearch className="text-2xl" />
        </label>
      </div>
      <div className="md:hidden flex items-center justify-start md:w-5/6 w-full max-w-[600px] h-12 pr-10 bg-g_Background_Shaded_Shop rounded-[10px] text-[18px] cursor-pointer">
        <span className="absolute right-6">
          <IoSearch />
        </span>
        <p>جستجو در</p>
        <h1
          to="/shop"
          className="absolute right-32 md:hidden flex font-primary text-2xl font-[700]"
        >
          AMASHOP
        </h1>
      </div>
    </form>
  );
};

export default SearchBar;
