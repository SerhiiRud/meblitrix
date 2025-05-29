// import { ModalButton } from "../../common/ModalButton/ModalButton";
import MenuLink from "./MenuLink";
import headerData from "@/data/header.json";
// import { ModalProps } from "./ModalTypes";
type ModalProps = {
  onClick: () => void;
};

export const Modal: React.FC<ModalProps> = ({ onClick }) => {
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full max-w-dvw overscroll-none backdrop-blur-xl">
      <div className="flex h-[495px] max-w-[300px] mx-auto flex-col bg-mainBgc px-6 py-5 outline-amber-300 outline-dotted">
        <nav className="">
          <ul className="pt-[62px] flex flex-col gap-6 items-center">
            {headerData.header.map((item) => (
              <li
                key={item.label}
                className="text-xl md:text-base uppercase text-white  "
              >
                <MenuLink
                  to={item.href}
                  onClick={onClick}
                  text={item.label}
                  className="z-10 cursor-pointer hover-text-shadow transition-all duration-300 ease-in-out"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
