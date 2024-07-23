import Logo from "./logo";
import SearchBar from "./searchBar";
import Login from "./login";
import CardIcon from "./cardIcon";
import PhoneNav from "./phoneNav";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 lg:px-12 md:px-8 px-2 py-1 pb-0 flex flex-col justify-center items-center w-screen  border-b-[3px] !bg-g_Text_White z-50 ">
      <nav className="flex flex-col w-full max-w-[1600px]">
        <div className="flex justify-between h-16">
          <div className="flex items-center justify-start md:w-3/4 w-full lg:gap-8 gap-4">
            <Logo />
            <SearchBar />
          </div>
          <div className="md:flex hidden items-center justify-end w-1/4 gap-4">
            <Login />
            <CardIcon />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 md:hidden flex flex-row items-center lg:px-12 md:px-8 px-4 w-screen h-16 justify-between border-t-[3px] text-gray-500 bg-white z-50">
          <PhoneNav />
          <CardIcon classNames="flex flex-col justify-center items-center gap-2 font-sans text-[14px] min-w-max border-none w-[50px] mb-2" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
