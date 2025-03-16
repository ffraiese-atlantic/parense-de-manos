"use client";

import { useBattleList } from "@/context/battleListContext";
import { BattleItem, VoteForEnum } from "../battleList";
import { buttonClassGen } from "../BattlesClassHelper";
// import { motion } from "framer-motion";

interface VoteMobileProps {
  fighter: { name: string; percentage: number; id: string };
  side: VoteForEnum;
  actualBattle: BattleItem | null;
  // handleVote: (side: VoteForEnum, id: string) => void;
}

/* prettier-ignore */
export default function VoteMobile({fighter, side, actualBattle} : VoteMobileProps) {
  const { isLoading } = useBattleList();

  return (
    <div className={`w-full flex flex-col group transition-all duration-500 ${side === "left" ? "items-start" : "items-end"} gap-5 px-[5%]`}>
        <button
          disabled={isLoading || actualBattle?.isVoted}
          className={buttonClassGen(actualBattle, side)}
          // onClick={() => handleVote(side, fighter.id)}
        >
          {fighter.name}
        </button>

        <div className="flex flex-col w-full items-center">
          {/* Percentage value */}
          <div className={`text-base font-normal flex w-full ${side === "left" ? "justify-start" : "justify-end"}`}>
            <h3 className={`${actualBattle?.votedFor === side ? "text-white" : "text-inactiveGray"}`}>{`${fighter.percentage}%`}</h3>
          </div>
          {/* Percentage bar */}
          <div className={`w-full h-[5px] 2xs:h-2 transition-all duration-500 flex ${side === "left" ? "justify-start" : "justify-end"} rounded-lg overflow-hidden`}>  
            <div className={`${actualBattle?.votedFor === side ? "bg-purple percentage-bar-shadow": "bg-inactiveGray"} ${side === "left" ? "order-[0]" : "order-1"}`} style={{ width: `${fighter.percentage}%` }}/>
            <div className={`bg-white ${actualBattle?.votedFor !== side && "opacity-20"} `} style={{width: `${100 - fighter.percentage}%`}}/>
          </div>
        </div>
    </div>
  );
}
