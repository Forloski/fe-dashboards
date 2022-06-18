import { Components, Theme } from "@mui/material";

export const createThemeComponents = (): Components<Theme> => {
  return {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          height: "79px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  };
};
