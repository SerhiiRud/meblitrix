import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" overflow-hidden py-14 bg-mainBcg">
      <div id="container" className="container">
        <div className="px-5 w-full h-full items-center flex justify-between mb-6 sm:mb-0">
          <Link
            href="/"
            className="text-white font-oswald text-4xl hover-text-shadow transition-all duration-300 ease-in-out"
          >
            MebliTRIX
          </Link>
          <ul className="flex justify-center sm:flex-row items-center sm:gap-16">
            <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-mainBcg transition-all duration-300 ease-in-out mx-3 rounded-full px-3 py-1 hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] ">
              <Link href="https://www.instagram.com" target="_blank">
                instagram
              </Link>
            </li>
            <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-mainBcg transition-all duration-300 ease-in-out mx-3 rounded-full px-3 py-1 hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] ">
              <Link href="https://facebook.com" target="_blank">
                facebook
              </Link>
            </li>
            <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-mainBcg transition-all duration-300 ease-in-out mx-3 rounded-full px-3 py-1 hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] ">
              <Link href="https://t.me/" target="_blank">
                Telegram
              </Link>
            </li>
            <li className="text-white/60">© 2017-2025 MebliTRIX</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
