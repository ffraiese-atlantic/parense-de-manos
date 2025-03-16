"use client";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "./context/userContext";
import { BattleListProvider } from "./context/battleListContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <UserProvider>
        <BattleListProvider>
          {children}
        </BattleListProvider>
      </UserProvider>
    </SessionProvider>
  );
}
