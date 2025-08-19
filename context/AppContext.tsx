"use client";

import { createContext, useContext, useRef, useState } from "react";

export type AppContextProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formRef?: React.RefObject<HTMLFormElement | null>;
};

export const AppContext = createContext<null | AppContextProps>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formRef=useRef<HTMLFormElement | null>(null);

  const value = {
    isModalOpen,
    setIsModalOpen,
    formRef,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

