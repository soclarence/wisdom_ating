import img from "../assets/wisdom-abt.jpg";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

export default function About() {
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

    // setTimeout(() => {
    //   setIsVisible(false);
    // }, 3000);
  }, [isVisible]);
  return (
    <div className="min-h-screen pt-36 px-5 flex flex-wrap justify-between relative">
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
      <div className="lg:w-[55%] w-[90%] lg:sticky top-10">
        <img src={img} alt="" onLoad={() => setIsVisible(false)} />
      </div>
      <div className="w-[90%] lg:w-[40%] lg:pr-20 mb-10">
        <h1 className="font-bold text-[4rem]">About</h1>
        <p>
          Ifiokobong Ating popularly known as Wisdom Ating, a visionary and
          dynamic leader, is known for his exceptional ability to develop and
          execute innovative brand and marketing strategies that consistently
          drive growth and exceed client expectations. <br /> <br /> With close
          to a decade experience building businesses and serving clients across
          diverse sectors, including Real Estate, Fintech, FMCGs, Agriculture
          and Human Development. Wisdom brings a unique perspective and fresh
          approach to every project he takes on. <br /> <br />
          He has worked with renowned organisations, such as the African Union,
          United Nations, Tony Elumelu Foundation, Bill and Melinda Gates
          Foundation, WaterAid Nigeria, and many more. He has a proven track
          record of developing successful campaigns that increase brand
          awareness, drive engagement, and generate results. <br /> <br />A
          passionate and inspiring leader, Wisdom is committed to getting Africa
          a seat on the global scene by investing in People, Stories and Ideas -
          fostering a culture of creativity, collaboration, and innovation. He
          believes in the power of people development and is dedicated to
          mentoring and empowering African youths to achieve their full
          potential. <br />
          <br />
          At the core of his approach to business is a customer-centric mindset,
          which he believes is essential for building and sustaining long-term
          relationships. With his strategic vision, deep industry knowledge, and
          exceptional business Acumen, Wisdom Ating is an invaluable asset to
          any organisation looking to make a lasting impact through their
          business, brand and marketing efforts.
        </p>
      </div>
    </div>
  );
}
