import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";

const Login = () => {
  return (
    <div className="flex items-center border-[1px] rounded-[5px] py-2 [&>*:nth-child(2)]:border-r-[2px] [&>*:nth-child(2)]:border-r-g_Text_Black">
      <Link
        to="/"
        className="flex lg:px-4 px-2 font-bold min-w-max gap-1 text-[16px]"
      >
        <span>
          <IoLogInOutline className="text-2xl" />
        </span>
        <span>ورود</span>
      </Link>
      <Link
        to="/"
        className="flex lg:px-4 px-2 font-bold min-w-max gap-1 text-[16px]"
      >
        <span>تبت نام </span>
      </Link>
    </div>
  );
};

export default Login;
