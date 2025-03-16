"use client";

import { Variants, motion, useInView } from "framer-motion";
import "./FirstEdition.scss";
import { MutableRefObject, useRef } from "react";
import FirstEditionVideo from "./components/FirstEditionVideo";

const directions = {
  left: "left",
  right: "right",
};

export default function FirstEdition() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef);

  const titleVariant: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    show: () => ({
      scaleX: titleInView ? 1 : 0,
      opacity: titleInView ? 1 : 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  const buildLine = (direction: string, variant: Variants, inView: boolean) => {
    const className =
      direction === "right"
        ? "right-partner-line origin-right"
        : "left-partner-line";

    return (
      <div className="w-1/4 h-[2px]">
        <motion.div
          className={className}
          variants={variant}
          initial="hidden"
          animate={inView && "show"}
        />
      </div>
    );
  };

  const buildSection = (
    ref: MutableRefObject<null>,
    inView: boolean,
    variant: Variants
  ) => {
    return (
      <div className="flex flex-col justify-start items-center w-full gap-2">
        <div className="flex items-start justify-center">
          {/* Left Line */}
          {buildLine(directions.left, variant, inView)}

          {/* Title */}
          <motion.h3
            ref={ref}
            className="text-center text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-nowrap"
            animate={{
              opacity: inView ? 1 : 0,
              transition: {
                duration: 1,
              },
            }}
          >
            REVIVÍ PARENSE DE MANOS
          </motion.h3>

          {/* Right Line */}
          {buildLine(directions.right, variant, inView)}
        </div>
        <h2 className="italic text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-light text-center">
          1ª edición
        </h2>
      </div>
    );
  };

  return (
    <section
      className="w-screen h-[80vh] md:h-auto hidden 2xs:flex justify-center lg:mt-32"
      id="edition"
    >
      <div className="container flex flex-col justify-center items-center">
        <div className="w-full h-full lg:h-auto relative flex flex-col justify-start items-center gap-5 lg:gap-10 xs:px-4 sm:px-7 md:px-10 lg:px-0 pt-14 xs:pt-16 sm:pt-[75px] md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-36 3xl:pt-44">
          {buildSection(titleRef, titleInView, titleVariant)}
          <div className="flex w-full lg:w-5/6 xl:w-5/6 2xl:w-3/4 3xl:2/3 max-w-[1250px] video-border aspect-video px-1 xl:px-4 xl:py-3">
            <FirstEditionVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
