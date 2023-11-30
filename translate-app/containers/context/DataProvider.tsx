"use client";
import React, {
  createContext,
  useContext,
  FC,
  ReactNode,
  useMemo,
  useState,
} from "react";
import { useDebounce } from "use-debounce";

interface MyContextType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

interface MyContextProviderProps {
  children: ReactNode;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider: FC<MyContextProviderProps> = ({ children }) => {
  const [search, setSearch] = useState("Hello,how are you?");
  const [value] = useDebounce(search, 1000);

  const sharedData: MyContextType = useMemo(
    () => ({
      search,
      setSearch,
      value,
    }),
    [search, value]
  );

  return <MyContext.Provider value={sharedData}>{children}</MyContext.Provider>;
};

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
