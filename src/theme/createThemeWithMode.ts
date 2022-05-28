import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { themePalette } from "./themeObjects/themePalette";
import { themeComponents } from "./themeObjects/themeComponents";

const createThemeWithMode = (themeMode?: PaletteMode) => {
  return createTheme({
    palette: themePalette(themeMode),
    components: themeComponents(),
  });
};

export default createThemeWithMode;
