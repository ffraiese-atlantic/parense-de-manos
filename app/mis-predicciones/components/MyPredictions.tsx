"use client";

import { BattleItem, VoteForEnum } from "@/components/Battles/battleList";
import pdmLogo from "@/assets/logo.svg";
import twitterLogo from "@/assets/images/my-predictions/twitter.svg";
import shareLogo from "@/assets/images/my-predictions/share.svg";
import "./MyPredictions.scss";
import Link from "next/link";
import { useBattleList } from "@/context/battleListContext";
import { twitterPredictionsMessageGen } from "./TwitterMsgHelper";

export default function MyPredictions() {
  const { battleList } = useBattleList();

  const toLowerName = (word: string) => {
    const characters = word.split("");
    const loweredName = characters.slice(1).join("").toLowerCase();
    return characters[0] + loweredName;
  };

  const handleTwitter = (battleList: BattleItem[]) => {
    const twitterUrl = twitterPredictionsMessageGen(battleList);
    window.open(twitterUrl, "_blank");
  };

  const votedBattle = (battle: BattleItem) => {
    return (
      <div
        className="flex w-full h-6 md:h-7 2xl:h-11 items-end justify-between xl:gap-5 px-2 xs:px-3 sm:px-1 md:px-4 lg:px-8 3xl:px-10"
        key={`prediction-${battle.fighterLeft.name}-${battle.fighterRight.name}`}
      >
        <div className="text-2xs leading-2xs 2xs:text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl xs:w-5/12 text-nowrap font-bold">
          <span
            className={`${
              battle.isVoted && battle.votedFor == VoteForEnum.left
                ? "text-white"
                : "text-unvotedGray"
            } lg:text-white`}
          >
            {battle.fighterLeft.name}{" "}
          </span>
          <span className="font-normal text-unvotedGray">vs</span>{" "}
          <span
            className={`${
              battle.isVoted && battle.votedFor == VoteForEnum.right
                ? "text-white"
                : "text-unvotedGray"
            } lg:text-white`}
          >
            {battle.fighterRight.name}
          </span>
        </div>
        {/* Voto del usuario oculto hasta 1024px */}
        <div className="hidden lg:flex text-2xs leading-2xs 2xs:text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl w-1/6 text-nowrap font-bold">
          {battle.votedFor === VoteForEnum.left
            ? toLowerName(battle.fighterLeft.name)
            : toLowerName(battle.fighterRight.name)}
        </div>
        {/* Barra de porcentajes */}
        <div className="w-1/2 sm:w-44 md:w-[37%] 3xl:max-w-[400px] flex justify-end">
          <div className="relative w-28 xs:w-32 sm:w-36 md:w-[150px] lg:w-full h-6 sm:h-7 md:h-8 2xl:h-10 flex justify-center items-end">
            <h2 className="absolute top-0 left-0 text-2xs leading-2xs 2xs:text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl font-medium font-roboto">
              {`${
                battle.votedFor === VoteForEnum.left
                  ? battle.fighterLeft.percentage
                  : battle.fighterRight.percentage
              }%`}
            </h2>
            <h2 className="absolute top-0 right-0 text-2xs leading-2xs 2xs:text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl font-medium font-roboto">
              {`${
                battle.votedFor === VoteForEnum.left
                  ? battle.fighterRight.percentage
                  : battle.fighterLeft.percentage
              }%`}
            </h2>
            <div
              className="bg-purple h-1 percentage-bar-shadow"
              style={{
                width: `${
                  battle?.votedFor === VoteForEnum.left
                    ? battle.fighterLeft.percentage
                    : battle.fighterRight.percentage
                }%`,
              }}
            />
            <div
              className="h-1 bg-inactiveGray"
              style={{
                width: `${
                  100 -
                  (battle?.votedFor === VoteForEnum.left
                    ? battle.fighterLeft.percentage
                    : battle.fighterRight.percentage)
                }%`,
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  const unvotedBattle = (battle: BattleItem) => {
    return (
      <div
        className="flex w-full h-6 2xl:h-11 items-end justify-between px-2 xs:px-3 sm:px-1 md:px-4 lg:px-8 3xl:px-10"
        key={`prediction-${battle.fighterLeft.name}-${battle.fighterRight.name}`}
      >
        <div className="text-2xs leading-2xs 2xs:text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl xs:w-5/12 text-nowrap font-bold">
          <span className="font-bold text-white">
            {battle.fighterLeft.name}{" "}
          </span>
          <span className="font-normal text-white">vs</span>{" "}
          <span className="font-bold text-white">
            {battle.fighterRight.name}
          </span>{" "}
        </div>
        {/* Vision web del boton de ir a votar */}
        <div className="w-56 sm:w-7/12 lg:w-[37%] 3xl:max-w-[400px] text-nowrap hidden lg:flex justify-end items-end gap-4 sm:gap-0">
          <div className="w-56 sm:w-full text-nowrap hidden lg:flex justify-end items-end gap-4 xs:gap-3 sm:gap-11 md:gap-12 lg:gap-5 xl:gap-10 2xl:gap-5">
            <h2 className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-[28px] font-bold">
              Todavía podés votar
            </h2>
            <Link
              href="/#ganadores"
              className="cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <button className="go-to-versus-button text-xs sm:text-sm xl:text-base 2xl:text-lg font-medium py-1 lg:px-2">
                Ir al versus
              </button>
            </Link>
          </div>
        </div>
        {/* Vision mobile del boton de ir a votar */}
        <div className="w-36 text-nowrap flex lg:hidden items-end justify-end">
          <Link
            href="/#ganadores"
            className="cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <button className="go-to-versus-button text-2xs leading-2xs xs:text-xs sm:text-sm font-medium py-1 px-2 sm:px-3">
              Todavía podés votar
            </button>
          </Link>
        </div>
      </div>
    );
  };

  const buildBattle = (battle: BattleItem) => {
    if (battle.votedFor) {
      return votedBattle(battle);
    } else {
      return unvotedBattle(battle);
    }
  };

  return (
    <section className="w-screen h-screen flex justify-center">
      <div className="container flex flex-col items-center">
        {/* Header */}
        <div className="w-full xl:w-5/6 flex justify-evenly xs:justify-between items-center py-4 xs:py-3 sm:py-4 md:py-6 lg:py-7 xl:py-8 2xl:py-10 px-5 xl:px-0">
          <div className="w-1/2 2xs:w-1/3">
            <Link
              href="/"
              className="cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <img
                alt="Parense de Manos"
                className="w-12 xs:w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36"
                src={pdmLogo.src}
              />
            </Link>
          </div>
          {/* Muestra el titulo en el header para web */}
          <div className="hidden 2xs:flex w-1/3 justify-center">
            <h1 className="hidden 2xs:flex text-center text-sm xs:text-base md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-nowrap">
              Mis predicciones
            </h1>
          </div>
          <div className="w-1/2 2xs:w-1/3 flex justify-end">
            <button
              className="share-container contain-content px-2 xs:px-3 md:px-4 lg:px-5 xl:px-7 py-1 sm:py-2 xl:py-3 flex justify-center items-center gap-1 xl:gap-2 cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => battleList && handleTwitter(battleList)}
            >
              <img
                alt="Compartir"
                src={shareLogo.src}
                className="w-2 sm:w-3 md:w-3 xl:w-4 h-2 sm:h-2 md:h-3 xl:h-4"
              />
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-medium text-white text-nowrap">
                Compartir en
              </h2>
              <img
                alt="Twitter"
                src={twitterLogo.src}
                className="w-2 sm:w-3 md:w-4 xl:w-5 h-2 sm:h-3 md:h-4 xl:h-5"
              />
            </button>
          </div>
        </div>
        {/* Container */}
        <div className="w-full 3xl:flex 3xl:justify-center px-3 2xs:px-5 xs:px-7 sm:px-20 md:px-16 lg:px-20 xl:px-32 2xl:px-40 pb-10">
          <div className="predictions-container w-full 3xl:max-w-[1275px] flex flex-col justify-start 2xs:justify-center py-7 items-center gap-8 px-3 2xs:px-6 xs:px-8 sm:px-6 3xl:px-14 2xl:pb-14">
            {/* Muestra el titulo en el container para mobile */}
            <h1 className="text-sm 2xs:hidden font-bold">Mis predicciones</h1>
            <div
              className="flex w-full justify-between gap-4 lg:px-8 3xl:px-10 xl:gap-8"
              key="predictions-titles"
            >
              <div className="text-xs 2xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl text-start pl-8 lg:pl-14 2xl:pl-20 w-5/12 text-nowrap">
                Versus
              </div>
              {/* Header del voto oculto hasta 1024 */}
              <div className="hidden lg:flex text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl w-1/6 text-nowrap">
                Tu voto
              </div>
              <div className="text-xs 2xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl text-center md:text-end lg:text-center md:w-[37%] 3xl:max-w-[400px] text-nowrap">
                Predicciones del público
              </div>
            </div>
            {battleList?.map((battle) => buildBattle(battle))}
          </div>
        </div>
      </div>
    </section>
  );
}
