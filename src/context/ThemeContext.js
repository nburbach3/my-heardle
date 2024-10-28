"use client";
import { themeStyles } from "@/constants/Themes";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    ...themeStyles.Default,
  });

  const changeTheme = (newTheme) => {
    if (newTheme === "Default") {
      setTheme({
        ...themeStyles.Default,
      });
    } else if (newTheme === "Light") {
      setTheme({
        ...themeStyles.Light,
      });
    } else if (newTheme === "Blue") {
      setTheme({
        ...themeStyles.Blue,
      });
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
