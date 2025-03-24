import "./styles.css";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import PropTypes from "prop-types";

export default function ThemeIconContainer({ iconComponent, chosen = false }) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="theme-icon-container"
      style={{
        backgroundColor: chosen
          ? theme.iconContainer.backgroundColor
          : "transparent",
      }}
    >
      {React.createElement(iconComponent, {
        className: "icon",
        fill: chosen ? theme.icon.colorWhenChosen : "currentColor",
      })}
    </div>
  );
}

ThemeIconContainer.propTypes = {
  iconComponent: PropTypes.elementType,
  chosen: PropTypes.bool,
};
