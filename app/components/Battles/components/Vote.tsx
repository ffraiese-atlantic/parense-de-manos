"use client";

import { useBattleList } from "@/context/battleListContext";
import { BattleItem, VoteForEnum } from "../battleList";
import { buttonClassGen } from "../BattlesClassHelper";
// import { motion } from "framer-motion";

interface VoteProps {
  fighter: { name: string; percentage: number; id: string };
  side: VoteForEnum;
  actualBattle: BattleItem | null;
  // handleVote: (side: VoteForEnum, id: string) => void;
}

/* prettier-ignore */
export default function Vote({fighter, side, actualBattle} : VoteProps) {
  const { isLoading } = useBattleList();

  return (
    <div className={`h-full flex items-center group overflow-hidden transition-all duration-500 ${actualBattle?.votedFor ? "w-1/2 lg:w-1/3 2xl:w-[30%] 2xl:gap-5" : "w-2/5 md:w-1/3"}`}>
      <div className={`w-18 m-8 flex justify-center ${side === "left" ? "order-[0]" : "order-1"}`}>
        <button
          disabled={isLoading || actualBattle?.isVoted}
          className={buttonClassGen(actualBattle, side)}
          // onClick={() => {if(!isLoading) handleVote(side, fighter.id)}}
        >
          {fighter.name}
        </button>
      </div>

      {/* prettier-ignore */}
      <div className={`w-full h-4 items-end flex relative ${actualBattle?.votedFor ? "ml-0" : "ml-14"}`}>  
        {/* Percentage value */}
        <div className={`absolute -top-5 lg:-top-6 2xl:-top-8 3xl:-top-9 text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-normal ${side === "left" ? "left-0" : "right-0"}`}>
          <h3 className={`${actualBattle?.votedFor === side ? "text-white" : "text-inactiveGray"}`}>{`${fighter.percentage}%`}</h3>
        </div>
          {/* Percentage bar */}
        <div className={`w-full h-2 transition-all duration-500 flex ${side === "left" ? "justify-start" : "justify-end"} rounded-lg overflow-hidden`}>  
          <div className={`${actualBattle?.votedFor === side ? "bg-purple percentage-bar-shadow": "bg-inactiveGray"} ${side === "left" ? "order-[0]" : "order-1"}`} style={{ width: `${fighter.percentage}%` }}/>
          <div className={`bg-white ${actualBattle?.votedFor !== side && "opacity-20"} `} style={{width: `${100 - fighter.percentage}%`}}/>
        </div>
      </div>
    </div>
  );
}
