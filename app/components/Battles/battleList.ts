export enum VoteForEnum {
  left = "left",
  right = "right",
}

export interface BattleItem {
  fighterLeft: {
    name: string;
    percentage: number;
    id: string;
    nickname: string;
    winner: boolean;
  };
  fighterRight: {
    name: string;
    percentage: number;
    id: string;
    nickname: string;
    winner: boolean;
  };
  image: string;
  mobileimage: string;
  id: number;
  votedFor?: VoteForEnum;
  isVoted: boolean;
}

export const battleList: BattleItem[] = [];
