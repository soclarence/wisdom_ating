import { Link } from "react-router-dom";
import wizLogo from "../assets/wizLogo.svg";
import { motion } from "framer-motion";
// import { useState } from "react";

export default function Menu(props) {
  return props.visible ? (
    <div
      className={`absolute h-screen w-screen bg-black top-0 left-0 right-0 p-10 z-10 lg:hidden`}
    >
      <div className="w-full flex items-center justify-center">
        <Link to="/" className="w-[70%]">
          <img src={wizLogo} alt="Wisdom Ating Sign" />
        </Link>
        <div
          onClick={props.close}
          className="space-y-1 w-full flex flex-col items-end cursor-pointer"
        >
          <div className="w-6 h-[2px] bg-white" />
          <div className="w-3 h-[2px] bg-white" />
          <div className="w-5 h-[2px] bg-white" />
        </div>
      </div>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
          velocity: 50,
        }}
      >
        <ul className="w-full mix-blend-difference text-white mt-20 flex flex-col space-y-5">
          <Link to="/" className="w-full pb-2 border-b-[1px]">
            <li onClick={props.close}>Home</li>
          </Link>
          <Link to="/about" className="w-full pb-2 border-b-[1px]">
            <li onClick={props.close}>About</li>
          </Link>
          <a
            href="https://calendly.com/wisdomating/30min?back=1&month=2023-10"
            target="_black"
            rel="noreferrer"
            className="w-full pb-2 border-b-[1px]"
          >
            <li>Schedule a call</li>
          </a>
        </ul>
      </motion.div>
    </div>
  ) : null;
}
