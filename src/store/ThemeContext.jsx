import {createContext, useContext, useEffect, useState} from "react";
const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
   const [isDarkTheme,setIsDarkTheme] = useState(false);

   const handleChangeTheme = () => {
      setIsDarkTheme((prevTheme) => {
         const newTheme = !prevTheme;
         localStorage.setItem('darkmode', newTheme.toString());
         return newTheme;
      });
   }

   useEffect(() => {
      const storedTheme = localStorage.getItem("darkmode");
      setIsDarkTheme(storedTheme === "true");
   },[]);

   const value = {
      isDarkTheme,
      setIsDarkTheme,
      handleChangeTheme,
   }

   return (
      <ThemeContext.Provider value={value}>
         {children}
      </ThemeContext.Provider>
   )
}

export const useTheme = () => {
   return useContext(ThemeContext);
}
