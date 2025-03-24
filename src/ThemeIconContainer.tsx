import "./styles.css";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

type ThemeIconContainerProps = {
  IconComponent: React.ElementType;
  onThemeChosen: () => void;
  chosen: boolean;
};

export default function ThemeIconContainer({
  IconComponent,
  onThemeChosen,
  chosen = false,
}: ThemeIconContainerProps) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="theme-icon-container"
      onClick={onThemeChosen}
      style={{
        backgroundColor: chosen
          ? theme.iconContainer.backgroundColor
          : "transparent",
      }}
    >
      <IconComponent
        className="icon"
        fill={chosen ? theme.icon.colorWhenChosen : "currentColor"}
      />
    </div>
  );
}
