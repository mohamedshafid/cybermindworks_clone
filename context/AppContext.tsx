"use client";

import { createContext, useContext, useRef, useState } from "react";

export type AppContextProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formRef?: React.RefObject<HTMLFormElement | null>;

  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;

  jobType: string;
  setJobType: React.Dispatch<React.SetStateAction<string>>;

  salary: number;
  setSalary: React.Dispatch<React.SetStateAction<number>>;
};

export const AppContext = createContext<null | AppContextProps>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salary, setSalary] = useState(0);

  const value: AppContextProps = {
    isModalOpen,
    setIsModalOpen,
    formRef,
    search,
    setSearch,
    location,
    setLocation,
    jobType,
    setJobType,
    salary,
    setSalary,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
