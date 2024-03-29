import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <Context.Provider value={{ setShowNav, showNav, toggleNav }}>
      {children}
    </Context.Provider>
  );
};
