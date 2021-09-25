import { createContext, ReactNode, useContext, useState } from "react";
import { Account } from "../types";

type AuthContext = {
  account?: Account;
}

type AuthProviderProps = {
  children: ReactNode;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [account, setAccount] = useState<Account | undefined>();

  function signUp() {
    const fake: Account = {
      id: 0,
      username: "user",
    };
    setAccount(fake);
  }

  const value = { account };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider.");
  }
  return ctx;
}
