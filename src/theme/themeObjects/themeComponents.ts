import { Components } from "@mui/material";

export const themeComponents = (): Components => {
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
