import glove from "@/assets/images/icons/glove.png";
import { motion } from "framer-motion";

export default function Glove() {
  return (
    <motion.img
      initial={{
        top: "50%",
        left: "-4rem",
        y: "-50%",
      }}
      animate={{
        top: "50%",
        left: "-2rem",
        y: "-50%",
        transition: {
          type: "spring",
          duration: 0.6,
          bounce: 0.7,
        },
      }}
      className="absolute w-6"
      src={glove.src}
    />
  );
}
