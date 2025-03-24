import "./styles.css";
import { themes, themesKeys } from "./themes/themes";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeSwitch from "./ThemeSwitch";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || themesKeys[0]
  );

  return (
    <ThemeContext.Provider value={themes[theme]}>
      <ThemeSwitch theme={theme} setTheme={setTheme} />
    </ThemeContext.Provider>
  );
}
