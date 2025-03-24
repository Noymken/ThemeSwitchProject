import "./styles.css";
import { themes, themesKeys } from "./themes/themes";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeSwitch from "./ThemeSwitch";
import { THEME_KEY } from "./localStorageKeys";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem(THEME_KEY) || themesKeys[0]
  );

  const changeTheme = (newThemeKey: string) => {
    setTheme(newThemeKey);
    localStorage.setItem(THEME_KEY, newThemeKey);
  };

  return (
    <ThemeContext.Provider value={themes[theme as keyof typeof themes]}>
      <ThemeSwitch theme={theme} setTheme={changeTheme} />
      {/* rest of the app's components... */}
    </ThemeContext.Provider>
  );
}
