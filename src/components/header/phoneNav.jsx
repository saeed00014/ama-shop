import { Link } from "react-router-dom";
import { navLinkPhone } from "../../data/data";

const PhoneNav = () => {
  return (
    <>
      {navLinkPhone.map((link) => {
        return (
          <Link
            to={link.path}
            className="flex flex-col justify-center items-center gap-2 font-sans text-[14px] w-[50px]"
          >
            <span className="text-[1.4rem] text-black">{link.icon}</span>
            <span style={{ fontFamily: "iran" }} className="text-black">
              {link.name}
            </span>
          </Link>
        );
      })}
    </>
  );
};

export default PhoneNav;
