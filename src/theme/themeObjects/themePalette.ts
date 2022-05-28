import { PaletteMode, PaletteOptions } from "@mui/material";

export const themePalette = (themeMode?: PaletteMode): PaletteOptions => {
  return themeMode === "dark"
    ? {
        mode: "dark",
      }
    : {
        mode: "light",
        primary: {
          main: "#556cd6",
        },
      };
};
