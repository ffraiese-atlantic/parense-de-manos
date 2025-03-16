"use client";

import { useBattleList } from "@/context/battleListContext";
import { MyPredictions } from "./components";
import NoVotes from "./components/NoVotes";
import bg from "@/assets/images/background.png";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import MyPredictionsHits from "./components/MyPredictionsHits";

export default function MyPredictionsPage() {
  const { battleList } = useBattleList();
  const { data: session, status } = useSession();

  const checkSession = () => {
    if (status === "loading") return;

    if (!session?.user) {
      signIn("google", { callbackUrl: "/mis-predicciones" });
      return null;
    }
  };

  useEffect(() => {
    checkSession();
  }, [status]);

  return (
    <main>
      <div className="w-screen h-screen fixed top-0 left-0 -z-50">
        <img
          className="w-full h-full object-cover"
          src={bg.src}
          alt="background"
        />
      </div>
      {status === "loading" ||
        (!battleList && (
          <div className="w-full h-screen flex justify-center items-center">
            <h1 className="text-3xl font-semibold">Cargando...</h1>
          </div>
        ))}

      {status !== "loading" && session?.user && <MyPredictionsHits />}
    </main>
  );
}
