// import Service from "./Service";
import Image1 from "../assets/IMG_2472.jpg";

export default function Services(props) {
  return (
    <div
      onClick={props.bgClose}
      id="bg"
      className="fixed flex-col top-0 left-0 right-0 bg-[#242424] bg-opacity-60 backdrop-blur-sm h-screen w-screen flex items-center justify-center lg:px-0 z-[5000]"
    >
      <div className="w-[80vw] my-5">
        <button
          onClick={props.close}
          className="p-2 px-3 rounded-full backdrop-blur-sm bg-opacity-40 bg-white"
        >
          <p>Close</p>
        </button>
      </div>
      <div
        id="item"
        className="h-[80vh] w-[80vw] bg-[#242424] flex items-center lg:flex-row flex-col justify-center"
      >
        <div className="flex flex-col w-full px-5 md:w-[30%] lg:h-[40%]">
          <h1 className="lg:text-[3.5rem] lg:leading-[3rem] text-[2.5rem] leading-[2rem]">
            Services
          </h1>
          <p className="w-full mt-9">
            <span className="text-white hover:text-slate-400 cursor-pointer">
              Business Consulting
            </span>{" "}
            /{" "}
            <span className="text-white hover:text-slate-400 cursor-pointer">
              Leadership Training
            </span>{" "}
            /
            <span className="text-white hover:text-slate-400 cursor-pointer">
              {" "}
              One-on-One coaching
            </span>{" "}
            /{" "}
            <span className="text-white hover:text-slate-400 cursor-pointer">
              Speaking Engagements
            </span>{" "}
            /
            <span className="text-white hover:text-slate-400 cursor-pointer">
              {" "}
              Mentorship Program
            </span>
          </p>
        </div>
        <div className="w-full h-[0.06rem] my-10 lg:my-0 lg:h-full lg:w-[0.06rem] bg-gray-700" />
        <div className="md:w-[30%] w-full px-5 lg:h-[40%]">
          <p>
            A visionary and a dynamic leader, known for his exceptional ability
            to develop and execute innovative brand and marketing strategies
            that consistently drive growth and exceed client expectations.
          </p>
        </div>
        <div className="w-full h-[0.06rem] my-10 lg:my-0 lg:h-full lg:w-[0.06rem] bg-gray-700" />
        <div className="w-[50%] hidden px-5 h-screen lg:flex items-center">
          <img src={Image1} alt="" />
        </div>
      </div>
    </div>
  );
}
