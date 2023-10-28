import "./home.css";
import { Clock } from "iconsax-react";
import { Services } from "../components";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

export default function Home() {
  const [openService, setOpenService] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const show = {
    opacity: 1,
    display: "block",
  };

  const hide = {
    // opacity: 0,
    y: "-100%",
    duration: 1,
    transitionEnd: {
      display: "none",
      // ease: "easeInOut",
      // velocity: 50
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  const handleClose = () => {
    openService ? setOpenService(false) : setOpenService(true);
    console.log(openService);
  };

  // close popup based on bg
  const handleBgClose = (e) => {
    const id = e.target.id;
    if (id === "bg") {
      if (openService) {
        setOpenService(false);
      }
    }
    console.log(id);
  };

  return (
    <div>
      <motion.div
        className="h-screen w-screen fixed top-0 left-0 z-[200000]"
        animate={isVisible ? show : hide}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
          velocity: 50,
        }}
      >
        <Loader />
      </motion.div>
      {openService ? (
        <Services bgClose={handleBgClose} close={handleClose} />
      ) : null}
      {/* hero section */}
      <section className="h-screen flex flex-wrap items-end w-full lg:justify-between pb-16 px-5 pt-16 bg-opacity-25 lg:bg-opacity-100 lg:pt-0 wizbg bg-center bg-cover bg-no-repeat">
        <div className="flex flex-wrap-reverse gap-6 items-end w-full lg:w-[55%] mt-28 justify-between">
          <div className="w-full md:w-[45%]">
            <div className="invisible flex items-center  text-xs text-left gap-2 pb-5">
              <Clock size="20" color="#FFFFFF" />
              <p className="uppercase">
                UPCOMING EVENT — <span>18th OCT</span>
              </p>
            </div>

            <p>
              Driving Change in Africa by strengthening organizations - their
              strategy, systems and processes to help them make more money
            </p>
            <a
              href="https://calendly.com/wisdomating/30min?back=1&month=2023-10"
              target="_black"
              rel="noreferrer"
            >
              <button className="uppercase pt-5">- Schedule a call</button>
            </a>
          </div>
          <div className="w-full lg:w-fit">
            <h1 className="text-[4.5rem] leading-[4rem] lg:text-[6rem] lg:leading-[5rem]">
              Wisdom <br />
              Ating
            </h1>
          </div>
        </div>
        {/* button to see services */}
        <div>
          <button
            onClick={handleClose}
            className="rounded-full w-48 lg:h-48 border"
          >
            <p>
              SEE FULL <br /> SERVICES
            </p>
          </button>
        </div>
      </section>

      {/* cta */}
      {/* <div className="w-screen bg-white h-fit py-10 text-black flex flex-col items-center">
        <div className="my-16 rounded-md shadow-2xl shadow-slate-200 p-4 w-[70%]">
          sdcsdc
        </div>
      </div> */}
    </div>
  );
}
