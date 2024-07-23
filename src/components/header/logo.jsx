import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="md:flex hidden font-primary text-2xl font-black text-red-500"
    >
      AMASHOP
    </Link>
  );
};

export default Logo;
