"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useSession } from "next-auth/react";
import { fetchBattleList, fetchVoted } from "@/services/handlerMatches";
import { BattleItem } from "@/components/Battles/battleList";

interface BattleListContextValue {
  battleList: BattleItem[] | null;
  setBattleList: Dispatch<SetStateAction<BattleItem[] | null>>;
  sendVote: (fighterId: string, idToken: string) => void;
  isLoading: boolean;
}

const BattleListContext = createContext<BattleListContextValue | undefined>(
  undefined
);

export const BattleListProvider = ({ children }: { children: ReactNode }) => {
  // * Hooks
  const { data: session, status } = useSession();
  const [battleList, setBattleList] = useState<BattleItem[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // * Methods
  const sendVote = async (fighterId: string, idToken: string) => {
    setIsLoading(true);
    const data = await fetchVoted(fighterId, idToken);
    setBattleList(data);
    setIsLoading(false);
  };

  const getData = async () => {
    if (status !== "loading" && !battleList) {
      const data = await fetchBattleList(session?.idToken);
      setBattleList(data);
    }
  };

  // * Life Cycle
  useEffect(() => {
    getData();
  }, [status]);

  return (
    <BattleListContext.Provider
      value={{ battleList, setBattleList, sendVote, isLoading }}
    >
      {children}
    </BattleListContext.Provider>
  );
};

// Custom hook to use the context
export const useBattleList = () => {
  const context = useContext(BattleListContext);

  if (context === undefined) {
    throw Error("usebattleList must be used inside of a battleListProvider");
  }

  return context;
};
