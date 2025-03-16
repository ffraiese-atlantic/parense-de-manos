import { BattleItem } from "./battleList";

export const buttonClassGen = (
  actualBattle: BattleItem | null,
  vote: string
) => {
  const base = "px-2 2xs:px-3 md:px-4 2xl:px-5 py-1 md:py-2 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-light transition-all duration-500 text-nowrap "; // prettier-ignore

  // if the battle is not voted
  // if (!actualBattle?.votedFor) return base + "vote-button group-hover:hover-vote-button"; // prettier-ignore

  // if the battle is voted for the same side
  if (actualBattle?.votedFor === vote) return base + "vote-button-voted cursor-default"; // prettier-ignore

  // if the battle is voted for the other side
  return base + "vote-button-unvoted cursor-not-allowed";
};
