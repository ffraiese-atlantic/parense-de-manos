"use client";

import { motion } from "framer-motion";
import { fighterItem, fighterList } from "../fighterList";
import ListItem from "./ListItem";
import { Dispatch, SetStateAction, useState } from "react";

const variant = {
  hidden: { opacity: 0, x: "-50%" },
  show: (custom: number) => ({
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.5,
      delay: custom,
    },
  }),
};

interface FDProps {
  selected: fighterItem;
  setSelected: Dispatch<SetStateAction<fighterItem>>;
}

const FightersDesktop: React.FC<FDProps> = ({ selected, setSelected }) => {
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(false);

  const info = [
    {
      mainClass:
        "2xl:max-w-[750px] w-[35vw] xl:w-[45vw] 2xl:w-[40vw] pl-[45%] xl:pl-[55%] mb-0 xl:mb-4 relative -z-20",
      title: "País",
      data: selected.country.toUpperCase(),
      bgClass:
        "w-full xl:w-3/4 absolute -z-10 h-10 xl:h-14 top-[-5px] xl:top-[-9px] right-4 bg-gradient-to-r from-deepPurple to-purple rounded-2xl",
      custom: 0,
    },
    {
      mainClass:
        "2xl:max-w-[725px] w-[35vw] xl:w-[45vw] 2xl:w-[40vw] pl-[45%] xl:pl-[55%] mb-0 xl:mb-4 relative -z-20 top-16",
      title: "Edad",
      data: `${selected.age} AÑOS`,
      bgClass:
        "w-full xl:w-3/4 absolute -z-10 h-10 xl:h-14 top-[-5px] xl:top-[-9px] right-10 bg-gradient-to-r from-deepPurple to-purple rounded-2xl",
      custom: 0.2,
    },
    {
      mainClass:
        "2xl:max-w-[700px] w-[35vw] xl:w-[45vw] 2xl:w-[40vw] pl-[45%] xl:pl-[55%] mb-0 xl:mb-4 relative -z-20 top-32",
      title: "Altura",
      data: `${selected.height} MTS`,
      bgClass:
        "w-full xl:w-3/4 absolute -z-10 h-10 xl:h-14 top-[-5px] xl:top-[-9px] right-16 bg-gradient-to-r from-deepPurple to-purple rounded-2xl",
      custom: 0.4,
    },
    {
      mainClass:
        "2xl:max-w-[675px] w-[35vw] xl:w-[45vw] 2xl:w-[40vw] pl-[45%] xl:pl-[55%] relative -z-20 top-48",
      title: "Peso inicial",
      data: `${selected.weight} KG`,
      bgClass:
        "w-full xl:w-3/4 absolute -z-10 h-10 xl:h-14 top-[-5px] xl:top-[-9px] right-[84px] bg-gradient-to-r from-deepPurple to-purple rounded-2xl",
      custom: 0.6,
    },
  ];

  return (
    <section
      className="w-screen flex justify-center my-[15vh] lg:my-[20vh] xl:my-[25vh] 2xl:mt-[35vh]"
      id="luchadores"
    >
      <div className="container flex justify-center">
        <div className="w-3/4 flex">
          {/* Fighter List */}
          <div className="w-1/4 pl-4 xl:pl-16 flex flex-col justify-center">
            <h3 className="text-lg xl:text-2xl font-bold">LUCHADORES</h3>
            <div className="pt-5">
              {fighterList.map((fighter) => (
                <ListItem
                  item={fighter}
                  selected={selected}
                  setSelected={setSelected}
                  key={fighter.id}
                />
              ))}
            </div>
          </div>

          {/* Main Container */}
          <div className="w-1/2 relative flex justify-center">
            {/* Picture */}
            <div className="w-full 2xl:w-3/4">
              {/* eslint-disable-next-line */}
              <img
                className="img-shadow w-full h-full object-contain"
                src={selected.image}
                alt={selected.name}
              />
            </div>

            {/* Name */}
            <div className="absolute right-[-45%] top-[5%] w-fit">
              <motion.h1
                className="text-4xl xl:text-6xl font-bold text-right origin-right"
                animate={{ scale: isOpenInfo ? 1.3 : 1 }}
                transition={{ duration: 0.3, ease: "linear" }}
              >
                {selected.nick.toUpperCase()}
              </motion.h1>
              <motion.div
                className="h-[2px] bg-white w-full mt-4"
                initial={{
                  scaleX: isOpenInfo ? 0 : 1,
                  opacity: isOpenInfo ? 0 : 1,
                }}
                animate={{
                  scaleX: isOpenInfo ? 0 : 1,
                  opacity: isOpenInfo ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "linear" }}
              />
              <div className="w-full flex justify-end">
                <h3
                  className="w-fit text-lg xl:text-2xl mt-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out origin-right"
                  onClick={() => setIsOpenInfo(!isOpenInfo)}
                >
                  {isOpenInfo ? "Cerrar ficha X" : "Ver ficha técnica"}
                </h3>
              </div>
            </div>

            {/* Info */}
            <div className="absolute left-[65%] xl:left-[35%] 2xl:left-[30%] top-[30%] xl:top-[30%] font-bold">
              {info.map((item) => (
                <motion.div
                  className={item.mainClass}
                  key={item.title}
                  variants={variant}
                  initial="hidden"
                  animate={isOpenInfo ? "show" : "hidden"}
                  custom={item.custom}
                >
                  <h3 className="text-base xl:text-lg absolute bottom-10 xl:bottom-12">
                    {item.title}
                  </h3>
                  <h3 className="text-xl xl:text-3xl">{item.data}</h3>
                  <div className={item.bgClass} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FightersDesktop;
