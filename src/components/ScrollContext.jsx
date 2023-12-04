import React, { createContext, useState, useContext } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [scrollToAbout, setScrollToAbout] = useState(false);

  return (
    <ScrollContext.Provider value={{ scrollToAbout, setScrollToAbout }}>
      {children}
    </ScrollContext.Provider>
  );
};
