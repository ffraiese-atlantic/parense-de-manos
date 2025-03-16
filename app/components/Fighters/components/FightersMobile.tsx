"use client";

import { motion } from "framer-motion";
import { fighterItem, fighterList } from "../fighterList";
import { Dispatch, SetStateAction, useState } from "react";
import { IoClose } from "react-icons/io5";
import arrow from "@/assets/images/icons/arrowDown.png";
import "./GlassCard.css";
import { handleOverflow } from "@/utils/handleOverflow";
import gloveLeft from "@/assets/images/icons/gloveLeft.png";
import gloveRight from "@/assets/images/icons/gloveRight.png";

interface FDProps {
  selected: fighterItem;
  setSelected: Dispatch<SetStateAction<fighterItem>>;
}

const FightersMobile: React.FC<FDProps> = ({ selected, setSelected }) => {
  // * Hooks
  const [isOpen, setIsOpen] = useState(false);

  const info = [
    {
      mainClass:
        "w-[28vw] xs:w-[23vw] sm:w-[23vw] md:w-[20vw] relative pl-[10%] md:pl-[30%] -z-20 mb-2 xs:mb-4 sm:mb-10",
      title: "País",
      data: selected.country.toUpperCase(),
      bgClass:
        "w-[200%] absolute -z-10 h-6 xs:h-8 sm:h-10 top-[-3px] sm:top-[-6px] xs:-top-1 right-0 bg-gradient-to-r from-deepPurple to-purple rounded-2xl",
    },
    {
      mainClass:
        "w-[28vw] xs:w-[23vw] sm:w-[23vw] md:w-[20vw] relative pl-[10%] md:pl-[30%] -z-20 top-5 mb-2 xs:mb-4 sm:mb-10",
      title: "Edad",
      data: `${selected.age} AÑOS`,
      bgClass:
        "w-[200%] absolute -z-10 h-6 xs:h-8 sm:h-10 top-[-3px] sm:top-[-6px] xs:-top-1 right-3 bg-gradient-to-r from-deepPurple to-purple rounded-2xl",
    },
    {
      mainClass:
        "w-[28vw] xs:w-[23vw] sm:w-[23vw] md:w-[20vw] relative pl-[10%] md:pl-[30%] -z-20 top-10 mb-2 xs:mb-4 sm:mb-10",
      title: "Altura",
      data: `${selected.height} MTS`,
      bgClass:
        "w-[200%] absolute -z-10 h-6 xs:h-8 sm:h-10 top-[-3px] sm:top-[-6px] xs:-top-1 right-6 bg-gradient-to-r from-deepPurple to-purple rounded-2xl",
    },
    {
      mainClass:
        "w-[28vw] xs:w-[23vw] sm:w-[23vw] md:w-[20vw] relative pl-[10%] md:pl-[30%] -z-20 top-16",
      title: "Peso inicial",
      data: `${selected.weight} KG`,
      bgClass:
        "w-[200%] absolute -z-10 h-6 xs:h-8 sm:h-10 top-[-3px] sm:top-[-6px] xs:-top-1 right-9 bg-gradient-to-r from-deepPurple to-purple rounded-2xl",
    },
  ];

  // * Methods
  const selectFighter = (fighter: fighterItem) => {
    setSelected(fighter);
    setIsOpen(false);
  };

  const openModal = () => {
    handleOverflow();
    setIsOpen(true);
  };

  const closeModal = () => {
    handleOverflow();
    setIsOpen(false);
  };

  const chooseFighter = (fighter: fighterItem) => {
    handleOverflow();
    selectFighter(fighter);
  };

  return (
    <section
      className="w-screen flex justify-center mt-20 sm:mt-36"
      id="luchadores"
    >
      <div className="container flex justify-center">
        <div className="w-full flex flex-col px-4 relative">
          {/* Name and Modal opener */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold">
              LUCHADORES
            </h3>
            <div className="flex gap-2" onClick={openModal}>
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">
                {selected.name.toUpperCase()}
              </h1>
              <div className="w-3 flex items-center">
                <img className="w-full" src={arrow.src} alt="arrow" />
              </div>
            </div>
          </div>

          {/* Picture + Info */}
          <div className="w-full relative z-10 flex justify-start mt-8">
            {/* Picture */}
            <div className="w-2/3">
              {/* eslint-disable-next-line */}
              <img
                className="img-shadow w-full h-full object-contain"
                src={selected.image}
                alt={selected.name}
              />
            </div>

            {/* Info */}
            <div className="absolute left-[65%] 2xs:left-[70%] sm:left-[65%] top-[30%] xs:top-[30%] sm:top-[35%] font-bold">
              {info.map((item) => (
                <motion.div className={item.mainClass} key={item.title}>
                  <h3 className="text-[0.5rem] xs:text-xs absolute bottom-5 xs:bottom-8">
                    {item.title}
                  </h3>
                  <h3 className="text-xs xs:text-base">{item.data}</h3>
                  <div className={item.bgClass} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div
              className="flex w-fit bg-[#1E1E1E] rounded-2xl px-4 py-1 mt-6 md:mt-12"
              style={{ border: "1px solid rgba(255,255,255,0.3)" }}
            >
              <div className="w-5">
                <img
                  className="w-full h-full object-contain"
                  src={gloveRight.src}
                  alt="guante derecho"
                />
              </div>
              <h3 className="px-2 text-xs xs:text-sm md:text-lg">{`vs ${selected.vs}`}</h3>
              <div className="w-5">
                <img
                  className="w-full h-full object-contain"
                  src={gloveLeft.src}
                  alt="guante izquierdo"
                />
              </div>
            </div>
          </div>

          {/* List name Modal */}
          {isOpen && (
            <div className="glass w-4/5 xs:w-3/4 sm:w-[450px] xs:max-w-[350px] sm:max-w-full">
              <div
                onClick={closeModal}
                className="w-full flex justify-end px-4 pt-2"
              >
                <IoClose size={32} />
              </div>
              <div className="w-full flex flex-col items-center px-4 overflow-y-scroll">
                {fighterList.map((fighter, i) => (
                  <div
                    onClick={() => chooseFighter(fighter)}
                    className="w-full flex flex-col items-center"
                    key={fighter.id}
                  >
                    <h3 className="py-2">{fighter.name}</h3>
                    {i !== fighterList.length - 1 && (
                      <div
                        className="w-1/2 h-[1px]"
                        style={{
                          background:
                            "radial-gradient(rgba(255,255,255,1), rgba(255,255,255,0.1))",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Black layout */}
      <motion.div
        transition={{ duration: 0.6, ease: "backOut" }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className={`w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-[2px] z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={closeModal}
      />
    </section>
  );
};

export default FightersMobile;
