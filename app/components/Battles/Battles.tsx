"use client";

import "./Battles.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { BattleItem, VoteForEnum } from "./battleList";
import { Navigation } from "swiper/modules";
import prevButton from "@/assets/images/versus/prevButton.svg";
import nextButton from "@/assets/images/versus/nextButton.svg";
import { useBattleList } from "@/context/battleListContext";
import { useMediaQuery } from "react-responsive";
import Vote from "./components/Vote";
import VoteMobile from "./components/VoteMobile";
import BattleSlide from "./components/BattleSlide";

const breakpoints = {
  200: {
    slidesPerView: 2,
    spaceBetween: -10,
  },
  500: {
    slidesPerView: 3,
    spaceBetween: 3,
  },
};

export default function Battles() {
  // * Hooks
  const { battleList } = useBattleList();
  const swiperRef = useRef<SwiperRef | null>(null);
  const swiperRef2 = useRef<SwiperRef | null>(null);

  const [actualBattle, setActualBattle] = useState<BattleItem | null>(null);
  const [hasWinner, setHasWinner] = useState(false);

  const isSmallScreen = useMediaQuery({ minWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  // * Methods
  const handleButtonClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideToLoop(index);
      swiperRef2?.current?.swiper?.slideToLoop(index);
      setActualBattle(battleList && battleList[index]);
    }
  };

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
    setActualBattle(
      battleList && battleList[swiperRef.current.swiper.realIndex]
    );
  }, [actualBattle]);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
    setActualBattle(
      battleList && battleList[swiperRef.current.swiper.realIndex]
    );
  }, [actualBattle]);

  const handleSlide = (swiper: SwiperClass): void => {
    const currentIndex = swiper.realIndex;
    setActualBattle(battleList && battleList[currentIndex]);
    swiperRef2?.current?.swiper?.slideToLoop(currentIndex);
  };

  const titleClassGen = () => {
    if (isMediumScreen) {
      return "text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-[40px] font-extrabold text-center text-nowrap w-1/5 xl:w-1/5";
    } else {
      return "absolute top-2 sm:top-[2px] left-1/2 transform -translate-x-1/2 text-xs 2xs:text-sm sm:text-base font-extrabold text-center text-nowrap";
    }
  };

  // * Life Cycle
  useEffect(() => {
    if (swiperRef.current && battleList && !actualBattle) {
      swiperRef.current.swiper.slideTo(0);
      setActualBattle(battleList[0]);
    }
  }, [battleList]);

  useEffect(() => {
    if (battleList && actualBattle) {
      setActualBattle(battleList[actualBattle.id - 1]);
    }
  }, [battleList]);

  useEffect(() => {
    if ((swiperRef.current || swiperRef2.current) && battleList) {
      setActualBattle(battleList[0]);
    }
  }, [swiperRef]);

  useEffect(() => {
    if (actualBattle) {
      setHasWinner(
        actualBattle.fighterLeft.winner || actualBattle.fighterRight.winner
      );
    }
  }, [actualBattle]);

  return (
    <section
      className="w-screen flex justify-center mt-10 lg:mt-32 xl:mt-40 2xl:mt-48 3xl:mt-56"
      id="ganadores"
    >
      {!battleList ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-fit flex flex-col text-center font-semibold">
            <p>¡Pará la mano! </p>
            <p>Estamos cargando las peleas...</p>
          </div>
        </div>
      ) : (
        <div className="container flex justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center">
            {actualBattle && !hasWinner && (
              <div
                className={`w-full relative flex justify-center items-center transition-all duration-500 my-8 md:my-0 ${
                  actualBattle.votedFor ? "gap-10 md:gap-16 xl:gap-8" : "gap-4"
                }`}
              >
                {/* Left Button and result bar */}
                {isMediumScreen ? (
                  <Vote
                    fighter={actualBattle.fighterLeft}
                    side={VoteForEnum.left}
                    actualBattle={actualBattle}
                  />
                ) : (
                  <VoteMobile
                    fighter={actualBattle.fighterLeft}
                    side={VoteForEnum.left}
                    actualBattle={actualBattle}
                  />
                )}

                {/* Title */}
                <span className={titleClassGen()}>Votación finalizada</span>

                {/* Right Button and result bar */}
                {isMediumScreen ? (
                  <Vote
                    fighter={actualBattle.fighterRight}
                    side={VoteForEnum.right}
                    actualBattle={actualBattle}
                  />
                ) : (
                  <VoteMobile
                    fighter={actualBattle.fighterRight}
                    side={VoteForEnum.right}
                    actualBattle={actualBattle}
                  />
                )}
              </div>
            )}
            {actualBattle && hasWinner && (
              <div className="w-full sm:h-[82px] md:h-[114px] flex justify-center items-center my-8 md:my-0">
                {/* Title */}
                <span className="font-extrabold text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-[40px]">
                  Ganador del combate
                </span>
              </div>
            )}
            {/* Carousel */}
            <div className="w-full xs:w-11/12 xl:w-4/5 flex items-center relative mb-2 sm:my-5 lg:my-0 select-none">
              <Swiper
                ref={swiperRef}
                loop={true}
                modules={[Navigation]}
                initialSlide={0}
                spaceBetween={30}
                slidesPerView={1}
                className="w-full max-w-[1300px]"
                autoHeight
                onSlideChange={handleSlide}
                simulateTouch={!isLargeScreen}
                allowTouchMove={!isLargeScreen}
              >
                {battleList?.map((battle: BattleItem, index: number) => (
                  <SwiperSlide key={index} className="flex justify-center">
                    <BattleSlide battle={battle} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {isSmallScreen && (
                <>
                  <button
                    className="absolute top-1/2 right-0 w-4 md:w-5 lg:w-6 xl:w-7 2xl:w-8 z-10 transform -translate-y-1/2"
                    onClick={handleNext}
                  >
                    <img
                      src={nextButton.src}
                      className="w-8 h-auto"
                      alt="siguiente"
                    />
                  </button>
                  <button
                    className="absolute top-1/2 left-0 w-4 md:w-5 lg:w-6 xl:w-7 2xl:w-8 z-10 transform -translate-y-1/2"
                    onClick={handlePrev}
                  >
                    <img
                      src={prevButton.src}
                      className="w-8 h-auto"
                      alt="anterior"
                    />
                  </button>
                </>
              )}
            </div>

            {/* Battle List */}
            {isLargeScreen ? (
              <div className="flex justify-centers gap-4 xl:gap-6 2xl:gap-8 lg:mt-6 xl:mt-2">
                {battleList?.map((battle: BattleItem) => (
                  <button
                    key={battle.id}
                    onClick={() => handleButtonClick(battle.id - 1)}
                    className={`cursor-pointer text-lg xl:text-xl 2xl:text-2xl ${
                      actualBattle?.id === battle.id
                        ? "font-bold text-white cursor-default"
                        : "font-semibold text-inactiveGray hover:scale-105 hover:text-white hover:opacity-80"
                    } transition-all duration-300 tracking-tighter leading-tight`}
                  >
                    {battle.fighterLeft.name.toUpperCase()}
                    <br />
                    <span className="font-extralight tracking-tighter leading-tight">
                      vs
                    </span>
                    <br />
                    {battle.fighterRight.name.toUpperCase()}
                  </button>
                ))}
              </div>
            ) : (
              <Swiper
                ref={swiperRef2}
                loop={true}
                initialSlide={0}
                simulateTouch={false}
                className="w-full mt-4 sm:mt-7"
                breakpoints={{ ...breakpoints }}
              >
                {battleList?.map((battle: BattleItem, index: number) => (
                  <SwiperSlide key={index} className="grid place-items-center">
                    {/* prettier-ignore */}

                    <div
                      className="cursor-pointer text-center rounded-3xl w-fit py-1 bg-[rgba(30,30,30,1)]"
                      onClick={() => handleButtonClick(battle.id - 1)}
                      style={{ border: `1px solid ${actualBattle?.id === battle.id ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)"}` }} 
                    >
                      {/* prettier-ignore */}
                      <p className={`text-sm 2xs:text-base xs:text-sm font-semibold px-2 2xs:px-3 ${actualBattle?.id === battle.id ? "text-white" : "text-inactiveGray"}`}> 
                        {`${battle.fighterLeft.nickname} vs ${battle.fighterRight.nickname}`}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
