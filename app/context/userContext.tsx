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
import { signOut } from "next-auth/react";

interface user {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

interface UserContextValue {
  user: user | null;
  setUser: Dispatch<SetStateAction<user | null>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  popupType: PopupType | null;
  setPopupType: Dispatch<SetStateAction<PopupType | null>>;
}

type SessionStatus = "authenticated" | "unauthenticated" | "loading";

enum Status {
  "authenticated" = "authenticated",
  "unauthenticated" = "unauthenticated",
  "loading" = "loading",
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export enum PopupType {
  LOGIN = "LOGIN",
  TICKETS = "TICKETS",
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<user | null>(null);

  const [isOpen, setIsOpen] = useState(false); // Boolean to control the popup container
  const [popupType, setPopupType] = useState<PopupType | null>(null); // Popup Type (Login or Tickets)

  // Syncronize the context with the session
  useEffect(() => {
    if (session?.user) {
      if (status === (Status.authenticated as SessionStatus)) {
        setUser(session.user); // Set user
      }
      if (status === (Status.unauthenticated as SessionStatus)) {
        setUser(null); // Clear user
        signOut({ callbackUrl: "/" }); // Sign out
      }
    }
  }, [session, status]);

  return (
    <UserContext.Provider
      value={{ user, setUser, isOpen, setIsOpen, popupType, setPopupType }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context
export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw Error("useUser must be used inside of a UserProvider");
  }

  return context;
};
