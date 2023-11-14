import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6D95CA",
    },
    secondary: {
      main: "#E74C3C",
    },
    error: {
      main: "#FF5454",
    },
    success: {
      main: "#54FF98",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#CCCCCC",
    },
    background: {
      default: "#0E1520",
      paper: "#0E1520",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontSize: 14,
    h1: { fontSize: "2em", fontWeight: "bolder" },
    h2: { fontSize: "1.5em", fontWeight: "bolder" },
    h3: { fontSize: "1.17em", fontWeight: "bolder" },
    h4: { fontSize: "1em", fontWeight: "bolder" },
    h5: { fontSize: "0.83em", fontWeight: "bolder" },
    h6: { fontSize: "0.67em", fontWeight: "bolder" },
  },
});

export default theme;
