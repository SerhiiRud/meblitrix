import Link from "next/link";
import headerData from "@/data/header.json";

type LogoProps = {
  onClick: () => void;
};

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="z-51 text-white font-oswald text-4xl md:text-2xl xl:text-4xl hover-text-shadow transition-all duration-300 ease-in-out"
    >
      {headerData.logoName}
    </Link>
  );
};

export default Logo;
