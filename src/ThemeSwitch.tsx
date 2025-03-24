import "./styles.css";
import ThemeIconContainer from "./ThemeIconContainer";
import { themes, themesKeys } from "./themes/themes.js";
import PropTypes from "prop-types";

export default function ThemeSwitch({ theme, setTheme }) {
  const calcNextThemeIndex = () => {
    const nextIndex = (themesKeys.indexOf(theme) + 1) % 2;
    return nextIndex;
  };

  const changeTheme = () => {
    const nextTheme = themesKeys[calcNextThemeIndex()];
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <div className="theme-switch" onClick={changeTheme}>
      {Object.entries(themes).map(([key, value]) => (
        <ThemeIconContainer
          key={key}
          iconComponent={value.icon.svg}
          chosen={key === theme}
        />
      ))}
    </div>
  );
}

ThemeSwitch.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};
