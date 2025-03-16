import { BattleItem } from "@/components/Battles/battleList";
import axios from "axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_SERVER;

export const fetchVoted = async (
  fighterId?: string,
  token?: string
): Promise<BattleItem[]> => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/users/vote`,
      { fighterId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.matchs;
  } catch (error) {
    console.error("Error al votar:", error);
    return [];
  }
};

export const fetchBattleList = async (
  token?: string
): Promise<BattleItem[]> => {
  try {
    const url = `${apiBaseUrl}/fighters/matches`;
    const params = {
      url,
      method: "GET",
      headers: {},
    };

    if (token) {
      params.headers = { Authorization: `${token.replace(/"/g, "")}` }; // auth header with bearer token
    }

    const res = await axios(params);

    return res.data.matchs;
  } catch (error) {
    console.error("Error fetching battle list:", error);
    return [];
  }
};
