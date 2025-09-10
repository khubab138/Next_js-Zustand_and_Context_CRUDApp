import React from "react";
import { useTheme } from "./Theme-Provider";

const ThemeButton = () => {
  const { bg, mode, text, toggleTheme } = useTheme();

  return (
    <button
      style={{
        backgroundColor: mode === "dark" ? bg.light : bg.dark,
        color: text.paragraph[mode].text_color,
      }}
      className="border-2 border-black px-3 rounded-xl m-2"
      onClick={toggleTheme}
    >
      {mode == "dark" ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeButton;
