import { createTheme, responsiveFontSizes } from "@mui/material/styles";

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
      secondary: "#CCCCCC"
    },
    background: {
      default: "#0E1520",
      paper: "#0E1520",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
