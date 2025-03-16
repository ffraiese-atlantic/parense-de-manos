"use client";
import kick from "@/assets/images/footer/kick.png";
import atlantic from "@/assets/images/footer/atlantic.svg";
import instagram from "@/assets/images/footer/instagram.svg";
import stake from "@/assets/images/footer/sponsors/stake.svg";
import speed from "@/assets/images/footer/sponsors/speed.svg";
import sportline from "@/assets/images/footer/sponsors/sportline.svg";
import oncity from "@/assets/images/footer/sponsors/oncity.svg";
import bk from "@/assets/images/footer/sponsors/bk.svg";
import flow from "@/assets/images/footer/sponsors/flow.svg";
import iol from "@/assets/images/footer/sponsors/iol.svg";
import alikal from "@/assets/images/footer/partners/alikal.svg";
import centrum from "@/assets/images/footer/partners/centrum.svg";
import sonnos from "@/assets/images/footer/partners/sonnos.svg";
import coke from "@/assets/images/footer/partners/coke.svg";
import twitter from "@/assets/images/footer/twitter.svg";
import velez from "@/assets/images/footer/velez.svg";
import { Variants, motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Footer() {
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
  const directions = {
    left: "left",
    right: "right",
  };

  const buildLine = (direction: string, variant: Variants, inView: boolean) => {
    const className =
      direction === "right"
        ? "right-partner-line origin-right"
        : "left-partner-line";

    return (
      <div className="w-[30%]">
        <motion.div
          className={className}
          variants={variant}
          initial="hidden"
          animate={inView && "show"}
        />
      </div>
    );
  };

  return (
    <section
      className="w-screen h-[90vh] md:h-auto flex justify-center sm:mt-10 md:mt-32 lg:mt-40 mb-20 xl:mb-14 2xl:mb-10 3xl:mb-6"
      id="footer"
    >
      <div className="container flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full">
          <Link
            href="https://kick.com/luquitarodriguez"
            target="_blank"
            className="flex flex-col justify-center items-center gap-4 3xl:gap-9 mb-16 xs:mb-20 md:mb-[88px] lg:mb-24 xl:mb-[104px] 3xl:mb-28"
          >
            <h1 className="font-light text-xl sm:text-2xl md:text-[28px] lg:text-3xl 2xl:text-4xl">
              Vivilo por
            </h1>
            <div>
              <img
                src={kick.src}
                className="h-10 3xs:h-12 2xs:h-14 xs:h-16 sm:h-20 md:h-[88px] lg:h-24 xl:h-28 2xl:h-[120px] 3xl:h-32"
                alt="kick"
              />
            </div>
          </Link>
          {/* SPONSORS */}
          {/* title */}
          <div className="flex justify-center w-full mb-8 sm:mb-9 md:mb-10 lg:mb-[44px] xl:mb-12 3xl:mb-14 gap-5 lg:gap-7 xl:gap-10 2xl:gap-12 3xl:gap-14">
            <h1 className="text-xl xs:text-2xl md:text-[28px] lg:text-3xl xl:text-[32px] 2xl:text-4xl 3xl:text-5xl italic tracking-[0.25em] font-bold">
              S P O N S O R S
            </h1>
          </div>
          {/* LOGOS */}
          <div className="w-full flex flex-col lg:flex-row lg:flex-nowrap items-center lg:justify-center gap-7 md:gap-10 lg:gap-0 px-7 xs:px-10 mb-16 md:mb-20 xl:mb-24">
            {/* first row */}
            <div className="flex flex-nowrap w-full justify-between lg:justify-end items-center">
              <div className="w-auto flex justify-center lg:mr-8 xl:mr-9 2xl:mr-12 3xl:mr-14">
                <img
                  src={stake.src}
                  className="h-5 3xs:h-6 xs:h-8 sm:h-10 md:h-12 lg:h-10 xl:h-12 2xl:h-16 3xl:h-[70px]"
                  alt="Stake"
                />
              </div>
              <div className="w-auto mt-2 flex justify-center lg:mr-8 xl:mr-9 2xl:mr-12 3xl:mr-14">
                <img
                  src={speed.src}
                  className="h-7 3xs:h-8 xs:h-10 sm:h-12 md:h-16 lg:h-12 xl:h-14 2xl:h-20 3xl:h-[88px] 3xl:mt-4"
                  alt="Speed"
                />
              </div>
              <div className="w-auto mt-1 flex justify-center lg:mr-8 xl:mr-9 2xl:mr-12 3xl:mr-14">
                <img
                  src={sportline.src}
                  className="h-[15px] 3xs:h-4 xs:h-6 md:h-7 lg:h-6 xl:h-8 2xl:h-10"
                  alt="Sportline"
                />
              </div>
            </div>
            {/* second row */}
            <div className="flex flex-nowrap w-full justify-between lg:justify-start items-center">
              <div className="w-auto flex justify-center lg:mr-8 xl:mr-9 2xl:mr-12 3xl:mr-14">
                <img
                  src={oncity.src}
                  className="h-7 3xs:h-8 2xs:h-9 xs:h-9 sm:h-12 md:h-14 lg:h-12 xl:h-[60px] 2xl:h-20 3xl:h-[88px]"
                  alt="OnCity"
                />
              </div>
              <div className="w-auto flex justify-center lg:mr-8 xl:mr-9 2xl:mr-12 3xl:mr-14">
                <img
                  src={bk.src}
                  className="h-8 3xs:h-9 2xs:h-10 sm:h-14 md:h-16 lg:h-14 xl:h-[60px] 2xl:h-20 3xl:h-[88px]"
                  alt="Burger King"
                />
              </div>
              <div className="w-auto flex justify-center lg:mr-8 xl:mr-9 2xl:mr-12 3xl:mr-14">
                <img
                  src={flow.src}
                  className="h-4 3xs:h-5 2xs:h-6 xs:h-7 sm:h-10 md:h-12 lg:h-10 xl:h-12 2xl:h-16"
                  alt="Flow"
                />
              </div>
              <div className="w-auto flex justify-center lg:mr-8 xl:mr-9 2xl:mr-12 3xl:mr-14">
                <img
                  src={iol.src}
                  className="h-5 3xs:h-6 2xs:h-7 xs:h-8 sm:h-10 md:h-12 lg:h-10 xl:h-14 2xl:h-20 3xl:h-[88px]"
                  alt="IOL Inversiones"
                />
              </div>
            </div>
          </div>
          {/* PARTNERS */}
          <div
            ref={titleRef}
            className="flex justify-center items-center w-full mb-8 gap-2 xs:gap-4 sm:gap-6"
          >
            {buildLine(directions.left, titleVariant, titleInView)}
            <h1 className="text-base 2xs:text-lg xs:text-xl sm:text-2xl md:text-26px lg:text-3xl xl:text-[32px] 2xl:text-4xl 3xl:text-[40px] italic font-semibold tracking-wider">
              ACOMPAÑAN
            </h1>
            {buildLine(directions.right, titleVariant, titleInView)}
          </div>
          {/* logos */}
          <div className="flex flex-nowrap justify-between lg:justify-center px-10 items-center gap-5 3xs:gap-6 2xs:gap-5 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20 w-full mb-14 2xs:mb-16 xs:mb-20 md:mb-24 xl:mb-28 3xl:mb-32">
            <div className="w-auto flex justify-center">
              <img
                src={alikal.src}
                className="h-5 2xs:h-6 xs:h-8 sm:h-10 md:h-12 xl:h-14 3xl:h-16"
                alt="Alikal"
              />
            </div>
            <div className="w-auto sm:mt-2 flex justify-center">
              <img
                src={centrum.src}
                className="h-4 2xs:h-5 xs:h-6 sm:h-8 md:h-9 lg:h-10 xl:h-12 3xl:h-14 3xl:mt-4"
                alt="Centrum"
              />
            </div>
            <div className="w-auto flex justify-center">
              <img
                src={sonnos.src}
                className="h-3 2xs:h-4 xs:h-5 sm:h-7 md:h-8 lg:h-9 xl:h-10 3xl:h-[44px]"
                alt="Sonnos Fight"
              />
            </div>
            <div className="w-auto flex justify-center">
              <img
                src={coke.src}
                className="h-7 3xs:h-8 2xs:h-9 xs:h-[44px] sm:h-16 md:h-[72px] lg:h-20 xl:h-[88px] 3xl:h-28"
                alt="Coke Studio"
              />
            </div>
          </div>
          <div className="flex justify-between items-end w-full px-5 sm:px-10">
            <div className="flex flex-col justify-end h-36 w-1/3 gap-3">
              <h1 className="font-michroma text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl">
                Created by
              </h1>
              <a
                href="https://atlanticlabs.com.ar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={atlantic.src}
                  className="w-12 xs:w-14 sm:w-16 md:w-[70px] lg:w-20 2xl:w-24"
                  alt="atlantic labs"
                />
              </a>
            </div>
            <div className="flex flex-col items-center gap-10 w-1/3 pb-2">
              <h1 className="text-2xl lg:text-4xl 2xl:text-6xl font-bold text-center">
                19/12
              </h1>
              <img
                src={velez.src}
                className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-44 xl:w-52 2xl:w-60"
                alt="estadio velez"
              />
            </div>
            <div className="flex gap-3 w-1/3 justify-end items-center pb-2">
              <Link href="https://x.com/ParenseDeManos" target="_blank">
                <img
                  src={twitter.src}
                  className="w-6 xs:w-8 sm:w-10 md:w-12 lg:w-14 2xl:w-16"
                  alt="twitter"
                />
              </Link>
              <Link
                href="https://www.instagram.com/parensedemanosok/"
                target="_blank"
              >
                <img
                  src={instagram.src}
                  className="w-5 xs:w-7 sm:w-9 md:w-[46px] lg:w-[54px] 2xl:w-14"
                  alt="instagram"
                />
              </Link>
            </div>
          </div>
          <h1 className="font-michroma text-[8px] 2xs:text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl mt-10 xs:mt-14 sm:mt-16 md:mt-20 mb-5 xs:mb-8 sm:mb-9 md:mb-10">
            Parense de Manos 2024
          </h1>
        </div>
      </div>
    </section>
  );
}
