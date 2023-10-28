import { createContext, useState } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
   
    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === "light" ? "dark" : "light"); 
        setTheme(theme === "light" ? "dark" : "light")
    }
    return(
        <ThemeContext.Provider values={ {theme, toggleTheme} }>
            {children}
        </ThemeContext.Provider>
    
    )
    
}

export {ThemeProvider, ThemeContext};
export default ThemeContext;
