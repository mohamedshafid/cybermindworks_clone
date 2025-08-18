"use client";

import { createContext, useContext, useState } from "react";

export type AppContextProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<null | AppContextProps>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const value = {
    isModalOpen,
    setIsModalOpen,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

