import React, { createContext, useContext, ReactNode } from "react";

type AuthContextType = {
  isAuthenticaded: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const isAuthenticaded = true;

  const contextValue: AuthContextType = {
    isAuthenticaded,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext deve ser usado dentro de um AuthContextProvider",
    );
  }
  return context;
};
