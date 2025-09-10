"use client";

import React, { createContext, useContext, useState } from "react";

type ThemeMode = "light" | "dark";

type Theme = {
  mode: ThemeMode;
  toggleTheme: () => void;

  bg: {
    dark: string;
    light: string;
  };
  text: {
    heading: {
      light: { text_color: string; text_size: string };
      dark: { text_color: string; text_size: string };
    };
    paragraph: {
      light: { text_color: string; text_size: string };
      dark: { text_color: string; text_size: string };
    };
  };
};

const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  const theme: Theme = {
    mode,
    toggleTheme,
    bg: {
      light: "#234458",
      dark: "#091625",
    },
    text: {
      heading: {
        light: { text_color: "#22bab9", text_size: "24px" },
        dark: { text_color: "#22bab9", text_size: "24px" },
      },
      paragraph: {
        light: { text_color: "#b8dcee", text_size: "16px" },
        dark: { text_color: "#b8dcee", text_size: "16px" },
      },
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
