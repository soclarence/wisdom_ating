import { motion } from "framer-motion";
import Logo from "../assets/wizLogo.svg";
export default function Loader() {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black z-[200000]">
      <div className="bg-[#242424] h-full w-full flex flex-col items-center justify-center">
        <div className="text-white font-bold overflow-hidden">
          <div className="overflow-hidden">
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
              <img src={Logo} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
