import { useMediaQuery } from "react-responsive";
import { BattleItem } from "../battleList";
import { useEffect, useState } from "react";
import trophy from "@/assets/images/icons/trophy.png";

// prettier-ignore
const winnersImages = {
    Casero: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-casero.png",
    Emilio: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-emilio.png",
    Federikita: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-federikita.png",
    "Flor Vigna": "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-flor.png",
    Lorente: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-lorente.png",
    Luken: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-luken.png",
    Manuela: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-manuela.png",
    Maravilla: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-maravilla.png",
    Marti: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-marti.png",
    Mazza: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-mazza.png",
    Migliore: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-migliore.png",
    Mike: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-mike.png",
    Momo: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-momo.png",
    Rober: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-rober.png",
    Robleis: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-robleis.png",
    Ruso: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-rusop.png",
    Turco: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-turco.png",
    Will: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-will.png",
    Yeyo: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-yeyo.png",
    Zeko: "https://psdmimagenes.s3.us-east-1.amazonaws.com/winners/winner-zeko.png",
    };

interface Winner {
  id: string;
  name: string;
  nickname: string;
  percentage: number;
  winner: boolean;
}

type WinnerName = keyof typeof winnersImages;

export default function BattleSlide({ battle }: { battle: BattleItem }) {
  const [winner, setWinner] = useState<Winner | null>(null);
  const isSmallScreen = useMediaQuery({ minWidth: 640 });

  const getWinnerData = () => {
    if (battle.fighterLeft.winner) setWinner(battle.fighterLeft);
    else if (battle.fighterRight.winner) setWinner(battle.fighterRight);
  };

  useEffect(() => {
    getWinnerData();
  }, []);

  return winner ? (
    <div className="flex flex-col justify-between h-[830px] max-h-[830px] sm:flex-row sm:max-h-[310px] md:max-h-[370px] lg:max-h-[490px] xl:max-h-[540px] 2xl:max-h-[646px]">
      {/* Winner Pic */}
      <div className="w-full sm:w-1/2">
        <img
          className="w-full h-full object-contain"
          src={winnersImages[winner.name as WinnerName]}
          alt={`${battle.fighterLeft.name} vs ${battle.fighterRight.name}`}
        />
      </div>

      {/* Info about Winner */}
      <div className="flex w-full sm:w-1/2 gap-2">
        <div className="block sm:hidden w-12">
          <img
            className="w-full h-full object-contain"
            src={trophy.src}
            alt="trofeo"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="w-fit flex flex-col">
            {/* Winner Name and Trophy*/}
            <div className="w-fit flex gap-5">
              <h1 className="w-fit text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] lg:leading-[4rem] font-bold">
                {winner.nickname.toUpperCase()}
              </h1>
              <div className="hidden sm:block sm:w-5 md:w-7 lg:w-[38px]">
                <img
                  className="w-full h-full object-contain"
                  src={trophy.src}
                  alt="trofeo"
                />
              </div>
            </div>
            {/* Divider line */}
            <div className="h-[2px] bg-white w-full mt-1 mb-4 sm:mt-3 sm:mb-2 md:mt-5 md:mb-4 lg:mt-7 lg:mb-6" />
          </div>
          {/* Porcentage */}
          <div className="flex gap-[6px] md:gap-2 sm:text-base md:text-lg lg:text-2xl">
            <p className="font-normal sm:font-bold">El</p>
            <p className="font-bold">{` ${winner.percentage}% `}</p>
            <p className="font-normal sm:font-bold">
              del público votó que ganaba
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <img
      className="w-full"
      src={isSmallScreen ? battle.image : battle.mobileimage}
      alt={`${battle.fighterLeft.name} vs ${battle.fighterRight.name}`}
    />
  );
}
