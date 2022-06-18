import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { createThemePalette } from "./createThemeObjects/createThemePalette";
import { createThemeComponents } from "./createThemeObjects/createThemeComponents";
import { themeBreakpointsOptions } from "./createThemeObjects/createThemeBreakpoints";

const createThemeWithMode = (themeMode?: PaletteMode) => {
  return createTheme({
    palette: createThemePalette(themeMode),
    components: createThemeComponents(),
    breakpoints: themeBreakpointsOptions,
  });
};

export default createThemeWithMode;
