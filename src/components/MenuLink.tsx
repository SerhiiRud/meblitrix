import { Link as ScrollLink } from "react-scroll";

type MenuLinkProps = {
  to: string;
  text: string;
  className: string;
  onClick: () => void;
};

const MenuLink: React.FC<MenuLinkProps> = ({ to, text, onClick }) => {
  return (
    <ScrollLink
      to={to}
      onClick={onClick}
      className="cursor-pointer hover-text-shadow transition-all duration-300 ease-in-out"
    >
      {text}
    </ScrollLink>
  );
};

export default MenuLink;
