import wizLogo from "../assets/wizLogo.svg";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useState } from "react";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  const handleNav = () => {
    setIsVisible(true);
  };

  return (
    <div className="flex items-center w-full justify-between fixed left-0 right-0 p-5 z-[5000]">
      <Link to="/" className="w-[50%] lg:w-[15%]">
        <img src={wizLogo} alt="Wisdom Ating Sign" />
      </Link>
      <div className="w-[20%]">
        <Menu close={() => setIsVisible(false)} visible={isVisible} />
        <div
          onClick={handleNav}
          className="space-y-1 w-full flex flex-col items-end cursor-pointer lg:hidden"
        >
          <div className="w-6 h-[2px] bg-white" />
          <div className="w-3 h-[2px] bg-white" />
          <div className="w-5 h-[2px] bg-white" />
        </div>
        <ul className="hidden lg:flex items-center w-full justify-between mix-blend-difference text-white">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <a
            href="https://calendly.com/wisdomating/30min?back=1&month=2023-10"
            target="_black"
            rel="noreferrer"
          >
            <li>Schedule a call</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
