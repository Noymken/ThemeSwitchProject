import "./styles.css";
import ThemeIconContainer from "./ThemeIconContainer";
import { themes } from "./themes/themes.js";

type ThemeSwitchProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

export default function ThemeSwitch({ theme, setTheme }: ThemeSwitchProps) {
  const themeChosen = (newThemeKey: string) => {
    if (newThemeKey !== theme) {
      setTheme(newThemeKey);
    }
  };

  return (
    <div className="theme-switch">
      {Object.entries(themes).map(([key, value]) => (
        <ThemeIconContainer
          key={key}
          IconComponent={value.icon.component}
          chosen={key === theme}
          onThemeChosen={() => themeChosen(key)}
        />
      ))}
    </div>
  );
}
