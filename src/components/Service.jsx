import image from "../assets/bg-wisdom-ating.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Service() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  return (
    <div className="w-[30%]">
      <div className="bg-slate-400 h-56 w-full overflow-hidden object-cover">
        <motion.div
          initial={false}
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <img
            src={image}
            alt="wisdom ating head_shot"
            onLoad={() => setIsLoaded(true)}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <div className="">
        <h1>Service Title</h1>
        <p>Service Item</p>
      </div>
    </div>
  );
}
