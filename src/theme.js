import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#1976d2",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#f4f6f8",
        paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
      },
    },
    shape: {
      borderRadius: 10,
    },
  });
