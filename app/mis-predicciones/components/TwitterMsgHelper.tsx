import { BattleItem, VoteForEnum } from "../../components/Battles/battleList";

export const twitterPredictionsMessageGen = (battles: BattleItem[] | null) => {
  const baseUrl = "https://twitter.com/intent/tweet?text=";
  if (!battles) return;

  const battlesMessages: string[] = battles.map((battle) => {
    const [left, right] = battle.isVoted
      ? battle.votedFor == VoteForEnum.left
        ? ["✅", "❌"]
        : ["❌", "✅"]
      : ["◻️", "◻️"];

    const leftName =
      battle.fighterLeft.name === "Marti Benza"
        ? battle.fighterLeft.name
        : battle.fighterLeft.nickname;
    const rightName =
      battle.fighterRight.name === "Marti Benza"
        ? battle.fighterRight.name
        : battle.fighterRight.nickname;

    return `${left}${leftName} vs ${rightName}${right}`;
  });

  let urlTextPath: string = "";

  for (const text of battlesMessages) {
    urlTextPath = urlTextPath + text + "%0A";
  }

  const twitterMessage: string = `Predicciones de @ParenseDeManos %0A%0A${urlTextPath}%0AVotá en: parensedemanos.com`;

  return `${baseUrl}${twitterMessage}`;
};

export const twitterPredictionsHitsMessageGen = (
  battles: BattleItem[] | null
) => {
  const baseUrl = "https://twitter.com/intent/tweet?text=";
  if (!battles) return;

  const battlesMessages: string[] = battles.map((battle) => {
    const [left, right] = battle.isVoted
      ? battle.votedFor == VoteForEnum.left
        ? ["✅", "❌"]
        : ["❌", "✅"]
      : ["◻️", "◻️"];

    const leftName =
      battle.fighterLeft.name === "Marti Benza"
        ? battle.fighterLeft.name
        : battle.fighterLeft.nickname;
    const rightName =
      battle.fighterRight.name === "Marti Benza"
        ? battle.fighterRight.name
        : battle.fighterRight.nickname;

    return `${
      battle.fighterLeft.winner && "🏆"
    }${left}${leftName} vs ${rightName}${right}${
      battle.fighterRight.winner && "🏆"
    }`;
  });

  let urlTextPath: string = "";
  for (const text of battlesMessages) {
    urlTextPath = urlTextPath + text + "%0A";
  }

  const twitterMessage: string = `Mis aciertos de @ParenseDeManos %0A%0A${urlTextPath}`;

  return `${baseUrl}${twitterMessage}`;
};
