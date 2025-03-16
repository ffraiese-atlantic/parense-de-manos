"use client";

import { BattleItem, VoteForEnum } from "@/components/Battles/battleList";
import pdmLogo from "@/assets/logo.svg";
import twitterLogo from "@/assets/images/my-predictions/twitter.svg";
import shareLogo from "@/assets/images/my-predictions/share.svg";
import trophyLogo from "@/assets/images/icons/trophy.png";
import crossLogo from "@/assets/images/icons/cross.svg";
import checkLogo from "@/assets/images/icons/check.svg";
import "./MyPredictions.scss";
import Link from "next/link";
import { useBattleList } from "@/context/battleListContext";
import { twitterPredictionsHitsMessageGen } from "./TwitterMsgHelper";
import { useMediaQuery } from "react-responsive";

export default function MyPredictionsHits() {
  const { battleList } = useBattleList();
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  const toLowerName = (word: string) => {
    const characters = word.split("");
    const loweredName = characters.slice(1).join("").toLowerCase();
    return characters[0] + loweredName;
  };

  const handleTwitter = (battleList: BattleItem[]) => {
    const twitterUrl = twitterPredictionsHitsMessageGen(battleList);
    window.open(twitterUrl, "_blank");
  };

  const buildBattle = (battle: BattleItem) => {
    const hasWinner: boolean =
      battle.fighterLeft.winner || battle.fighterRight.winner;
    const predictHit: boolean =
      battle.isVoted &&
      ((battle.fighterLeft.winner && battle.votedFor === VoteForEnum.left) ||
        (battle.fighterRight.winner && battle.votedFor === VoteForEnum.right));
    return (
      <div
        className="flex w-full h-6 md:h-7 2xl:h-11 items-end justify-between xl:gap-8 2xl:gap-12 px-2 xs:px-3 sm:px-1 md:px-4 lg:px-0"
        key={`prediction-${battle.fighterLeft.name}-${battle.fighterRight.name}`}
      >
        <div className="relative flex text-2xs leading-2xs 2xs:text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl xs:w-5/12 lg:w-1/3 text-nowrap font-bold">
          {battle.fighterLeft.winner && (
            <img
              src={trophyLogo.src}
              className="absolute -left-5 xs:-left-6 sm:-left-7 2xl:-left-8 -top-[2px] xs:top-0 sm:top-1 lg:top-[2px] w-3 lg:w-4 2xl:w-5"
            />
          )}
          <span
            className={`${
              battle.isVoted && battle.votedFor == VoteForEnum.left
                ? "text-white"
                : "text-unvotedGray"
            } lg:text-white`}
          >
            {battle.fighterLeft.name}
          </span>
          <span className="font-normal text-unvotedGray mx-1 2xl:mx-2">
            {" "}
            vs{" "}
          </span>
          <span
            className={`${
              battle.isVoted && battle.votedFor == VoteForEnum.right
                ? "text-white"
                : "text-unvotedGray"
            } lg:text-white`}
          >
            {battle.fighterRight.name}
          </span>
          {battle.fighterRight.winner && (
            <div className="ml-3">
              <img
                src={trophyLogo.src}
                className="mt-0 xs:mt-[2px] sm:mt-1 md:mt-[6px] w-3 lg:w-4 2xl:w-5"
              />
            </div>
          )}
        </div>
        {/* Voto del usuario oculto hasta 1024px */}
        {battle.isVoted && (
          <div className="relative hidden lg:flex text-2xs leading-2xs 2xs:text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl w-1/6 text-nowrap font-bold">
            {battle.votedFor === VoteForEnum.left
              ? toLowerName(battle.fighterLeft.name)
              : toLowerName(battle.fighterRight.name)}
            {predictHit ? (
              <div className="absolute right-0 top-1/4">
                <img src={checkLogo.src} className="w-5 lg:w-6" />
              </div>
            ) : (
              hasWinner && (
                <div className="absolute right-0 top-1/4">
                  <img src={crossLogo.src} className="w-4 lg:w-5" />
                </div>
              )
            )}
          </div>
        )}
        {/* Barra de porcentajes */}
        {isLargeScreen ? (
          <div className="w-1/2 sm:w-44 md:w-[37%] 2xl:max-w-[350px] 3xl:max-w-[380px] flex justify-end">
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
        ) : (
          <div className="w-1/3 h-full flex justify-center items-center text-2xs leading-2xs 2xs:text-xs xs:text-sm sm:text-base md:text-lg">
            {hasWinner ? (
              predictHit ? (
                <div>
                  <img src={checkLogo.src} className="w-4 lg:w-5" />
                </div>
              ) : (
                <div>
                  <img src={crossLogo.src} className="w-3 lg:w-4" />
                </div>
              )
            ) : (
              !battle.isVoted && (
                <div className="h-full flex justify-center items-end">
                  <div>Sin voto</div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    );
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
        <div className="w-full 3xl:flex 3xl:justify-center px-3 2xs:px-5 xs:px-7 sm:px-20 md:px-16 lg:px-12 xl:px-16 pb-10">
          <div className="predictions-container w-full 3xl:max-w-[1275px] flex flex-col justify-start 2xs:justify-center py-7 items-center gap-8 px-8 sm:px-12 md:px-20 2xl:px-14 2xl:pb-14">
            {/* Muestra el titulo en el container para mobile */}
            <h1 className="text-sm 2xs:hidden font-bold">Mis predicciones</h1>
            <div
              className="flex w-full justify-between gap-4 lg:px-0 xl:gap-8 2xl:gap-12"
              key="predictions-titles"
            >
              <div className="text-xs 2xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl text-start pl-8 lg:pl-14 2xl:pl-20 w-5/12 lg:w-1/3 text-nowrap">
                {isLargeScreen ? "Versus" : "Mis votos"}
              </div>
              {/* Header del voto oculto hasta 1024 */}
              <div className="lg:flex text-xs 2xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl w-1/3 text-center lg:w-1/6 text-nowrap">
                Mis aciertos
              </div>
              {isLargeScreen && (
                <div className="text-xs 2xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl text-center md:text-end lg:text-center md:w-[37%]  2xl:max-w-[350px] 3xl:max-w-[380px] text-nowrap">
                  Predicciones del público
                </div>
              )}
            </div>
            {battleList?.map((battle) => buildBattle(battle))}
          </div>
        </div>
      </div>
    </section>
  );
}
