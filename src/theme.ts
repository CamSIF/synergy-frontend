import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E74C3C",
    },
    secondary: {
      main: "#6D95CA",
    },
    error: {
      main: "#EF5552",
    },
    success: {
      main: "#55FF98",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#BBBBBB",
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
